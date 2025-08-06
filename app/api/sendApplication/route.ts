import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import axios from 'axios';

const client = new SecretManagerServiceClient();
const COOLDOWN_PERIOD = 60000; // Example cooldown period in milliseconds
const userTimestamps: { [key: string]: number } = {};

async function getProjectId(): Promise<string> {
    const response = await axios.get('http://metadata.google.internal/computeMetadata/v1/project/project-id', {
      headers: { 'Metadata-Flavor': 'Google' },
    });
    return response.data;
  }

async function getSecret(secretName: string): Promise<string> {
    const projectId = await getProjectId();
  
    const [version] = await client.accessSecretVersion({
      name: `projects/${projectId}/secrets/${secretName}/versions/latest`,
    });
  const payload = version.payload?.data?.toString();
  if (!payload) {
    throw new Error(`Secret ${secretName} not found`);
  }

  return payload;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Get the user's IP address from the request
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('host');

    // Ensure ip is not null
    if (!ip) {
      return NextResponse.json(
        { message: 'Could not determine IP address.' },
        { status: 400 }
      );
    }

    // Get the current timestamp
    const currentTime = Date.now();

    // Check if the user has sent an application recently
    if (userTimestamps[ip]) {
      const lastSentTime = userTimestamps[ip];

      // Check if the cooldown period has passed
      if (currentTime - lastSentTime < COOLDOWN_PERIOD) {
        const remainingTime = COOLDOWN_PERIOD - (currentTime - lastSentTime);
        const remainingSeconds = Math.ceil(remainingTime / 1000); // Convert to seconds
        const errorMessage = `You have sent too many applications recently. Please try again later.`;
        console.log(`POST /api/sendApplication 429: ${errorMessage}`, { user: data }); // Log the error message with user data

        return NextResponse.json(
          { message: errorMessage, waitTime: remainingSeconds },
          { status: 429 }
        );
      }
    }

    // Update the user's last sent timestamp
    userTimestamps[ip] = currentTime;

    // Fetch secrets from Google Cloud Secret Manager
    const emailUser = await getSecret('EMAIL_USER');
    const emailAppPass = await getSecret('email_app_pass');
    const emailTo = await getSecret('EMAIL_TO');

    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: emailUser, // Your email username
        pass: emailAppPass, // Use the generated app password here
      },
    });

    // Define email options
    const mailOptions = {
      from: data.email,
      to: emailTo, // Your receiving email address
      subject: `New job application from ${data.firstName} ${data.lastName} for ${data.position}`,
      text: `
      CAREER APPLICATION
      
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone Number: ${data.phoneNumber}
      Position Applied For: ${data.position}
      Years of Experience: ${data.experience}
      Portfolio/LinkedIn: ${data.portfolio}
      
      Cover Letter:
      ${data.coverLetter}
      
      Sent from the careers page on pohlmanprotean.se
    `.trim(), // Use trim() to remove any leading or trailing whitespace
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application sent successfully' });
  } catch (error) {
    console.error('Error sending application:', error);
    return NextResponse.json({ error: 'Error sending application' }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const client = new SecretManagerServiceClient();
const COOLDOWN_PERIOD = 60000; // Example cooldown period in milliseconds
const userTimestamps: { [key: string]: number } = {};

async function getSecret(secretName: string): Promise<string> {
  const [version] = await client.accessSecretVersion({
    name: `projects/1022290610235/secrets/${secretName}/versions/1`,
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

    // Check if the user has sent a message recently
    if (userTimestamps[ip]) {
      const lastSentTime = userTimestamps[ip];

      // Check if the cooldown period has passed
      if (currentTime - lastSentTime < COOLDOWN_PERIOD) {
        const remainingTime = COOLDOWN_PERIOD - (currentTime - lastSentTime);
        const remainingSeconds = Math.ceil(remainingTime / 1000); // Convert to seconds
        const errorMessage = `You have sent too many messages recently. Please try again later.`;
        console.log(`POST /api/sendMessage 429: ${errorMessage}`, { user: data }); // Log the error message with user data

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
      subject: `New message from ${data.firstName} ${data.lastName} on pohlmanprotean.se`,
      text: `
      First Name: ${data.firstName}
      Last Name: ${data.lastName}
      Company: ${data.company}
      Job Title: ${data.jobTitle}
      Email: ${data.email}
      Phone Number: ${data.phoneNumber}
      
      Message:
      ${data.message}
      
      Sent from the contact form on pohlmanprotean.se
    `.trim(), // Use trim() to remove any leading or trailing whitespace
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data);

    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email username
        pass: process.env.EMAIL_APP_PASS, // Use the generated app password here
      },
    });

    // Define email options
    const mailOptions = {
      from: data.email,
      to: process.env.EMAIL_TO, // Your receiving email address
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

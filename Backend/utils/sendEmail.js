import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables (in case not already loaded)
dotenv.config({ path: "./.env" });

export const sendEmail = async ({ email, subject, message, userEmail }) => {
  try {
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email, // who will receive this
      subject: subject,
      text: `${message}\n\nSender Email: ${userEmail}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully.");
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};

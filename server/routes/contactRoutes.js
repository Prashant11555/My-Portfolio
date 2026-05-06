import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// In-memory storage for test mode
let contactsDB = [];

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send email notification
const sendEmailNotification = async (contactData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'prashanttripathi264@gmail.com',
      subject: `New Contact Form Message: ${contactData.subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">New Contact Form Message</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p><strong>Subject:</strong> ${contactData.subject || 'No subject provided'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #22c55e;">
              ${contactData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio contact form on ${new Date().toLocaleString()}.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    let contact;

    // Check if MongoDB is available
    if (req.app.locals.db_mode === "mongodb") {
      contact = new Contact({ name, email, subject, message });
      await contact.save();
    } else {
      // Test mode: save to in-memory array
      contact = {
        _id: Date.now().toString(),
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      contactsDB.push(contact);
    }

    // Send email notification
    const emailSent = await sendEmailNotification({ name, email, subject, message });

    if (emailSent) {
      return res.status(201).json({
        message: "Message received and email sent successfully! ✅",
        contact,
        emailSent: true
      });
    } else {
      return res.status(201).json({
        message: "Message saved but email notification failed. Please check your email settings.",
        contact,
        emailSent: false
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Could not save message. Please try again later." });
  }
});

// GET all contacts (for testing)
router.get("/", (req, res) => {
  if (req.app.locals.db_mode === "mongodb") {
    return res.json({ message: "Use MongoDB to fetch contacts", mode: "mongodb" });
  } else {
    return res.json({ mode: "test", totalContacts: contactsDB.length, contacts: contactsDB });
  }
});

export default router;
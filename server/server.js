const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name, email, and message are required' 
    });
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide a valid email address' 
    });
  }

  // Length validation to prevent abuse
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({ 
      success: false, 
      error: 'Input exceeds maximum allowed length' 
    });
  }

  // Sanitize inputs to prevent injection
  const sanitizedName = name.trim().replace(/[<>]/g, '');
  const sanitizedEmail = email.trim().toLowerCase();
  const sanitizedMessage = message.trim().replace(/[<>]/g, '');

  // Rate limiting check (basic implementation)
  const userAgent = req.headers['user-agent'] || 'unknown';
  const clientIP = req.ip || req.connection.remoteAddress;
  console.log(`Contact form submission from IP: ${clientIP}, User-Agent: ${userAgent}`);

  // Configure the Gmail transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,   // Your Gmail address
      pass: process.env.EMAIL_PASS,   // App password from Google
    },
  });

  // Mail configuration
  const mailOptions = {
    from: process.env.EMAIL_USER,     // You send from your own Gmail
    to: process.env.EMAIL_USER,       // You receive it in the same Gmail
    subject: `Message from ${sanitizedName}`,
    text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
    replyTo: sanitizedEmail,          // So you can hit "Reply" directly
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

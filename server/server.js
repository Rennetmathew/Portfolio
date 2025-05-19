const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

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
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email,                   // So you can hit "Reply" directly
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

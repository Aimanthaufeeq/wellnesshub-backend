const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set up your Gmail transport using an App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wellnesshubhealth10@gmail.com',
    pass: 'rrfd nrmb fpob bjao' // NOT your normal Gmail password
  }
});

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).send('Email is required');

  fs.appendFileSync('subscribers.txt', `${email}\n`);

  const mailOptions = {
    from: 'wellnesshubhealth10@gmail.com',
    to: 'wellnesshubhealth10@gmail.com',
    subject: 'New Newsletter Subscriber',
    text: `You have a new subscriber: ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email failed:', error);
      return res.status(500).send('Email sending failed');
    }

    console.log('Email sent:', info.response);
    res.status(200).send('Subscribed successfully');
  });
});

app.listen(4000, () => console.log('Server running on port 4000'));

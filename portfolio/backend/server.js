const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer= require('nodemailer');

// create Express App 
const app = express();

// Middleware 
app.use(express.json());
app.use(cors());

// mongoDB Connection String 

const MONGO_URI = 'mongodb+srv://joseph:Joseph%40123@cluster0.cqxab0q.mongodb.net/Pizza?retryWrites=true&w=majority';
 
// connect to mongoDB

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error.message); // Log the error message
  });


// Define a simple Contact Schema
/*
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
*/
// Create a Mongoose Model
// const Contact = mongoose.model('Contact', contactSchema);

// configure nodemailer 

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'peddannaganjayela@gmail.com', // Replace with your email
        pass: 'ysao lcgl hywx ejhe',  // Replace with your email password (use app-specific password if 2FA is enabled)
    }
})

// route 

app.post('/api/contact',async (req,res)=>{
    try{
        const { name, email, subject, message } = req.body;
         

           const mailOptions = {
            from: 'peddannaganjayela@gmail.com',
            to: 'peddannaganjayela@gmail.com',  // Replace with recipient email (e.g., your own)
            subject: `New Contact Form Submission: ${subject}`,
            text: `
                You have a new contact form submission:
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message: ${message}
            `,
        };

             // Send email using Nodemailer
             transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.status(500).json({ message: 'Failed to send email' });
                } else {
                    console.log('Email sent:', info.response);
                    return res.status(200).json({ message: 'Contact information submitted successfully and email sent!' });
                }
            });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while submitting contact information' });
    }



})

// Set up the server to listen on a port
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
});

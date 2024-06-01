// on va require
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Mailgun = require("mailgun.js");
const formData = require("form-data");

//////Mailgun

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "Vellien Brandon",
  key: process.env.MAILGUN_API_KEY,
});

const app = express();
// Interroger mon serveur
app.use(cors());
app.use(express.json());

//  demande a mail gun d'envoyer un mail en fonction du body
app.post("/send-email", async (req, res) => {
  const sandbox = process.env.MAILGUN_SANDBOX;
  try {
    console.log(req.body);
    const data = {
      from: `${req.body.firstname} ${req.body.lastname} <${req.body.email}>`,
      to: process.env.EMAIL,
      subject: req.body.subject,
      message: req.body.message,
    };

    const response = await mg.messages.create(sandbox, data);

    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
app.listen(process.env.PORT, () => {
  console.log("server has started");
});

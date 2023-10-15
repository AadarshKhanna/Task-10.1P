// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
require('dotenv').config();

var api_key =  'key-46f40d334023c89603612dcccb495f66';
var domain = 'sandbox5f61c96513ff4c5a9f37c034be2df31d.mailgun.org';
const mg = mailgun({ apiKey: api_key, domain: domain });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Client/src/components/App.jsx");
});

app.post('/subscribe', (req, res) => {
    const email = req.body.email;

    const data = {
        from: "aadarsh4751.be22@chitkara.edu.in",
        to: "aadarsh4751.be22@chitkara.edu.in",
        subject: 'Welcome to Deakin!',
        text: 'Welcome to Deakin subscription, now you will be able to get the latest updates. Thank you'
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent:", body);
            res.send("Your email was sent successfully");
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}!!!`);
});

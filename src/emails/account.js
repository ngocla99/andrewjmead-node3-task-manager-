const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendWelcomeEmail = async (email, name) => {
  await transporter.sendMail({
    from: '"Nemo 👻" <leanhngoc2131999@gmail.com>',
    to: email,
    subject: "Thanks for joining in 🎆🎆🎆",
    text: `Welcome to the app, ${name}. Let me know how you are along with app.`,
  });
};

const sendCancelationEmail = async (email, name) => {
  await transporter.sendMail({
    from: '"Nemo 👻" <leanhngoc2131999@gmail.com>',
    to: email,
    subject: "Sorry to see you go 😭😭😭",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };

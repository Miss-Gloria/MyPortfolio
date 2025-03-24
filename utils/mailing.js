import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.USER_PASSWORD
    }
});

export const sendEmail = async (to, subject, html) => {
  const send = await transporter.sendMail({
    from: process.env.USER_GMAIL,
    to: to,
    subject,
    html
  })
};


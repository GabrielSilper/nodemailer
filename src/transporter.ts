import nodemailer from 'nodemailer';

export const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
});

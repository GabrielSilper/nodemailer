import { transporter, user } from './transporter';

async function sendEmail() {
  await transporter.sendMail({
    from: `Gabriel Pereira <${user}>`,
    to: 'gabrielsilper93@gmail.com',
    subject: 'Teste de email com nodemailer',
    html: '<h1>Teste de email com nodemailer</h1>',
  });
  console.log('Email enviado!');
}

sendEmail();

/* eslint-disable import/no-extraneous-dependencies */
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const transport = nodemailer.createTransport({
  service: 'gmail'
  , auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export type SendMailParams = {
  text: string
  fromEmail: string
  fromName: string
};

export const sendMail = async (params: SendMailParams) => {
  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${params.fromName} (${params.fromEmail})`,
    text: params.text,
  };

  const sendMailResult = await transport.sendMail(mailOptions);
    
  return sendMailResult;
};
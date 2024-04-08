import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  
    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
          user:'himanshuchahar208@gmail.com',
          pass: process.env.NEXT_PUBLIC_PASS
      }
    });
    const mailOptions = {
      from:'himanshuchahar208@gmail.com',
      to:"chaharhimanshu03@gmail.com",
      subject:subject,
      html:`<h1>Mail from : ${email}</h1> <h3>Message : ${message}</h3>`
  }

    try {
      const result = await transporter.sendMail(mailOptions);
      console.log('Email Sent Successfully!!')
      return NextResponse.json({status: 200,result});

  } catch (error) {
    console.log('Cant send the mail bcz: ',error);
  }
}

import { sendMail } from '@/lib/nodemailer';
import { SendEmailData } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest): Promise<NextResponse> {
  const { email, message, name } = await req.json() as SendEmailData;

  await sendMail({ text: message, fromEmail: email, fromName: name });

  return NextResponse.json({});
}
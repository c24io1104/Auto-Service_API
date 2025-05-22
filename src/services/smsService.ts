const { Vonage } = require('@vonage/server-sdk');
import dotenv from 'dotenv';

dotenv.config();

const vonage = new Vonage({ apiKey: process.env.VONAGE_API_KEY!, apiSecret: process.env.VONAGE_API_SECRET! });

const DEFAULT_FROM = 'Vonage APIs';
export async function sendSMS(to: string, text: string, from = DEFAULT_FROM): Promise<void> {
    try {
        const resp = await vonage.sms.send({ to, from, text });
        console.log('Message sent successfully', resp);
    } catch (err) {

        console.error('Error sending SMS:', err);
        throw err;
    }
}
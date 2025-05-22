import { Router, RequestHandler } from 'express';
import { sendSMS } from '../services/smsService';

const router = Router();

const notifySMS: RequestHandler = async (req, res, next) => {
    const { to, text } = req.body;
    if (!to || !text) {
        res.status(400).json({ error: '`to` and `text` are required' });
        return;
    }

    try {
        await sendSMS(to, text);
        res.json({ success: true, to, text });
    } catch (err) {
        next(err);
    }
};

router.post('/', notifySMS);

export default router;
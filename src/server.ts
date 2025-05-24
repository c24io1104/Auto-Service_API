import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/errorHandler';
import userRoutes from './routes/userRoutes';
import constants from './utils/constants';
import notificationRoutes from './routes/notificationRoutes';
import scheduleRoutes from './routes/scheduleRoutes';
import bookingRoutes from './routes/bookingRoutes';
const app = express();

// Global middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(`${constants.API_PREFIX}/users`, userRoutes);
app.use(`${constants.API_PREFIX}/notify-sms`, notificationRoutes);
app.use(`${constants.API_PREFIX}/schedules`, scheduleRoutes);
app.use(`${constants.API_PREFIX}/bookings`, bookingRoutes);
// Health check
app.get(`${constants.API_PREFIX}/health`, (req, res) => {
    res.json({ status: 'ok' });
});

// Error handler
app.use(errorHandler);

export default app;

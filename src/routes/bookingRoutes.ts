import { Router } from 'express';
import {
  createBooking,
  updateBookingStatus,
  getUserBookings
} from '../controllers/bookingController';

const router = Router();

router.post('/', createBooking);
router.get('/user/:userId', getUserBookings);
router.patch('/:id/status', updateBookingStatus);

export default router;
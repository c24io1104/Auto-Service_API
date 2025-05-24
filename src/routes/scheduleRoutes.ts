import { Router } from 'express';
import {
  createTimeSlot,
  getAvailableSlots,
  updateTimeSlot,
  deleteTimeSlot
} from '../controllers/scheduleController';

const router = Router();

router.post('/', createTimeSlot);
router.get('/available', getAvailableSlots);
router.put('/:id', updateTimeSlot);
router.delete('/:id', deleteTimeSlot);

export default router;
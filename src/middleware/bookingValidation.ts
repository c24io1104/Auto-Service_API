import { Request, Response, NextFunction } from 'express';

export const validateBooking = (req: Request, res: Response, next: NextFunction) => {
  const { User_ID, TimeSlot_ID, Vehicle_ID } = req.body;
  
  if (!User_ID || !TimeSlot_ID || !Vehicle_ID) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  if (isNaN(User_ID) || isNaN(TimeSlot_ID) || isNaN(Vehicle_ID)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  next();
};
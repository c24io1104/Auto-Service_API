import { Request, Response } from 'express';
import prisma from '../models/userModel';
import { sendSMS } from '../services/smsService';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { User_ID, TimeSlot_ID, Vehicle_ID, Notes } = req.body;
    
    const booking = await prisma.$transaction(async (tx) => {
      // Create booking
      const newBooking = await tx.booking.create({
        data: {
          User_ID,
          TimeSlot_ID,
          Vehicle_ID,
          Notes,
          Status: 'SCHEDULED'
        }
      });

      // Update available slots
      await tx.timeSlot.update({
        where: { TimeSlot_ID },
        data: { AvailableSlots: { decrement: 1 } }
      });

      // Send confirmation SMS
      const user = await tx.user.findUnique({ where: { User_ID } });
      if (user?.User_phone) {
        await sendSMS(
          user.User_phone,
          `Your booking for ${new Date().toLocaleDateString()} is confirmed!`
        );
      }

      return newBooking;
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error creating booking' });
  }
};
export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const booking = await prisma.booking.update({
      where: { Booking_ID: Number(id) },
      data: { Status: status }
    });
    
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error updating booking status' });
  }
};

export const getUserBookings = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const bookings = await prisma.booking.findMany({
      where: { User_ID: Number(userId) },
      include: { TimeSlot: true, Register_car: true }
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
};
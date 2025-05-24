import { Request, Response } from 'express';
import prisma from '../models/userModel';

export const createTimeSlot = async (req: Request, res: Response) => {
  try {
    const { StartTime, EndTime, MaxAppointments, Branch_ID, Service_ID } = req.body;
    const timeSlot = await prisma.timeSlot.create({
      data: {
        StartTime: new Date(StartTime),
        EndTime: new Date(EndTime),
        MaxAppointments,
        AvailableSlots: MaxAppointments,
        Branch_ID,
        Service_ID
      }
    });
    res.status(201).json(timeSlot);
  } catch (error) {
    res.status(500).json({ error: 'Error creating time slot' });
  }
};

export const getAvailableSlots = async (req: Request, res: Response) => {
  try {
    const { serviceId, branchId, date } = req.query;
    const slots = await prisma.timeSlot.findMany({
      where: {
        Service_ID: Number(serviceId),
        Branch_ID: Number(branchId),
        StartTime: {
          gte: new Date(date as string)
        },
        AvailableSlots: { gt: 0 }
      }
    });
    res.json(slots);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching slots' });
  }
};
export const updateTimeSlot = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedSlot = await prisma.timeSlot.update({
      where: { TimeSlot_ID: Number(id) },
      data: req.body
    });
    res.json(updatedSlot);
  } catch (error) {
    res.status(500).json({ error: 'Error updating time slot' });
  }
};

export const deleteTimeSlot = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.timeSlot.delete({
      where: { TimeSlot_ID: Number(id) }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting time slot' });
  }
};
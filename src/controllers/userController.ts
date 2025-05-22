import { Request, Response, NextFunction, RequestHandler } from 'express';
import prisma from '../models/userModel';

export const createUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prisma.user.create({ data: req.body });
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const getUsers: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const getUserById: RequestHandler = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const user = await prisma.user.findUnique({ where: { User_ID: id } });
        if (!user) { res.status(404).json({ error: 'User not found' }); return; }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const updateUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const user = await prisma.user.update({ where: { User_ID: id }, data: req.body });
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const deleteUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        await prisma.user.delete({ where: { User_ID: id } });
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};
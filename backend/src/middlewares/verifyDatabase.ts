import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/PrismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.$connect();
    
    return next();
  } catch {
    return res.status(500).json({ message: 'Ocorreu um erro interno nos nossos servidores, tente novamente mais tarde.' });
  }
}
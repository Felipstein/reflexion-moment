import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/PrismaClient";

export const verifyDatabase = (req: Request, res: Response, next: NextFunction) => {

  try {
    prisma.$connect();

    return next();
  } catch {
    return res.status(500).json({ message: 'Ocorreu um erro interno nos nossos servidores, tente novamente mais tarde.' });
  }

}
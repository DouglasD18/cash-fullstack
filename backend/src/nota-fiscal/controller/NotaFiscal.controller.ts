import { NextFunction, Request, Response } from "express";
import { NotaFiscalService } from "../service/NotaFiscal.service";

export class NotaFiscalController {
  static async getNotas(_req: Request, res: Response, next: NextFunction) {
    try {
      const notas = await NotaFiscalService.getAllNotaFiscal();

      return res.status(200).json(notas);
    } catch (error) {
      next(error);
    }
  }
}
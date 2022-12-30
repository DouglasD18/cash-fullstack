import { Router } from "express";
import { NotaFiscalController } from '../nota-fiscal/controller/NotaFiscal.controller';

export const router = Router();

router.get('/notas', NotaFiscalController.getNotas);

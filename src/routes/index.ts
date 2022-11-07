import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get('/health-check', (req: Request, res: Response) => res.sendStatus(StatusCodes.OK))


export { router }
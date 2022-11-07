import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { productRoutes } from "./product.routes";

const router = Router();

router.get('/health-check', (req: Request, res: Response) => res.sendStatus(StatusCodes.OK))

router.use('/products', productRoutes)

export { router }
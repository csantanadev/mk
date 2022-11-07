import { Router } from "express";
import { createProductController } from '../useCases/Product/CreateProduct';
import { productShemaValidator } from "../middleware/ProductSchemaMiddleware";

const productRoutes = Router();

productRoutes.post('/', productShemaValidator, createProductController.handle);


export { productRoutes }
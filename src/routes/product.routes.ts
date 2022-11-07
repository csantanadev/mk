import { Router } from "express";
import { createProductController } from '../useCases/Product/CreateProduct';
import { updateProductController } from '../useCases/Product/UpdateProduct';
import { deleteProductController } from "../useCases/Product/DeleteProduct";
import { productShemaValidator } from "../middleware/ProductSchemaMiddleware";

const productRoutes = Router();

productRoutes.post('/', productShemaValidator, createProductController.handle);
productRoutes.put('/:id', updateProductController.handle);
productRoutes.delete('/:id', deleteProductController.handle);


export { productRoutes }
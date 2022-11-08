import { Router } from "express";
import { createProductController } from '../useCases/Product/CreateProduct';
import { updateProductController } from '../useCases/Product/UpdateProduct';
import { deleteProductController } from "../useCases/Product/DeleteProduct";
import { searchProductController } from "../useCases/Product/SearchProduct";
import { productSchemaValidator } from "../middleware/ProductSchemaMiddleware";

const productRoutes = Router();

productRoutes.post('/', productSchemaValidator, createProductController.handle);
productRoutes.put('/:id', updateProductController.handle);
productRoutes.delete('/:id', deleteProductController.handle);

productRoutes.get('/', searchProductController.find);
productRoutes.get('/:slug', searchProductController.findBySlug);


export { productRoutes }
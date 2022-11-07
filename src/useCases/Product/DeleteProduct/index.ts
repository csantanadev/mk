import { DeleteProductUseCase } from './DeleteProductUseCase';
import { DeleteProductRepositoryMongoDb } from './../../../repositories/Product/implementations/mongoDB/DeleteProductRepositoryMongoDb';
import { DeleteProductController } from './DeleteProductController';

// instanciando a implementacao 
const deleteProductRepositoryMongoDb = new DeleteProductRepositoryMongoDb();

const deleteProductUseCase = new DeleteProductUseCase(deleteProductRepositoryMongoDb);

const deleteProductController = new DeleteProductController(deleteProductUseCase);

export { deleteProductController }




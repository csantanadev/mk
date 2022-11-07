import { UpdateProductUseCase } from './UpdateProductUseCase';
import { UpdateProductRepositoryMongoDb } from './../../../repositories/Product/implementations/mongoDB/UpdateProductRepositoryMongoDb';
import { UpdateProductController } from './UpdateProductController';

// instanciando a implementacao 
const updateProductRepositoryMongoDb = new UpdateProductRepositoryMongoDb();

const updateProductUseCase = new UpdateProductUseCase(updateProductRepositoryMongoDb);

const updateProductController = new UpdateProductController(updateProductUseCase);

export { updateProductController }




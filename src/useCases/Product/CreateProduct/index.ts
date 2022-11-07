import { CreateProductUseCase } from './CreateProductUseCase';
import { CreateProductRepositoryMongoDb } from './../../../repositories/Product/implementations/mongoDB/CreateProductRepositoryMongoDb';
import { CreateProductController } from './CreateProductController';


// instanciando a implementacao 
const createProductRepositoryMongoDb = new CreateProductRepositoryMongoDb();

const createProductUseCase = new CreateProductUseCase(createProductRepositoryMongoDb);

const createProductController = new CreateProductController(createProductUseCase);

export { createProductController }




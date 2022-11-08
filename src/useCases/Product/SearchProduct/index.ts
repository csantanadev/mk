import { SearchProductUseCase } from './SearchProductUseCase';
import { SearchProductRepositoryMongoDb } from './../../../repositories/Product/implementations/mongoDB/SearchProductRepositoryMongoDb';
import { SearchProductController } from './SearchProductController';

// instanciando a implementacao 
const searchProductRepositoryMongoDb = new SearchProductRepositoryMongoDb();

const searchProductUseCase = new SearchProductUseCase(searchProductRepositoryMongoDb);

const searchProductController = new SearchProductController(searchProductUseCase);

export { searchProductController }




import { Product } from '../../../../entities/Product';
import { ISearchProductRepository, Filter } from './../../ISearchProductRepository';
import Model from './schema/ProductSchemaMongoDb'

export class SearchProductRepositoryMongoDb implements ISearchProductRepository {

    async find(filter: Filter): Promise<Product[]> {

        const result: Product[] = await Model.find(filter)
        return result;

    }

    async findBySlug(slug: string): Promise<Product> {

        const product: Product = await Model.findOne({ slug });
        return product;

    }

}
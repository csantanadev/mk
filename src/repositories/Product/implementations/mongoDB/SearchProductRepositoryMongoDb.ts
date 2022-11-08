import { Product } from '../../../../entities/Product';
import { getPaginate } from '../../../../util';
import { ISearchProductRepository, Filter } from './../../ISearchProductRepository';
import Model from './schema/ProductSchemaMongoDb'

export class SearchProductRepositoryMongoDb implements ISearchProductRepository {

    async find(filter: Filter): Promise<Product[]> {

        const { limit, offset } = getPaginate(filter.page || 1);
        const result: Product[] = await Model.find(filter).limit(limit).skip(offset)
        
        return result;
    }

    async findBySlug(slug: string): Promise<Product> {

        const product: Product = await Model.findOne({ slug });
        return product;

    }

}
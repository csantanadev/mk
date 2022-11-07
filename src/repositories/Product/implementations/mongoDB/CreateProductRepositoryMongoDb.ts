import { Product } from '../../../../entities/Product';
import { ICreateProductRepository } from './../../ICreateProductRepository';
import Model from './schema/ProductSchemaMongoDb'


export class CreateProductRepositoryMongoDb implements ICreateProductRepository {

    async findBySlug(slug: string): Promise<Boolean> {

        const product = await Model.findOne({ slug });
        return product !== null;

    }

    async create(product: Product): Promise<Product> {

        const data = new Model(product);
        const result : Product = await data.save();
        return result;
    }

}
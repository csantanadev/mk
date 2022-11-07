import { Product } from '../../../../entities/Product';
import { IUpdateProductRepository } from './../../IUpdateProductRepository';
import Model from './schema/ProductSchemaMongoDb'


export class UpdateProductRepositoryMongoDb implements IUpdateProductRepository {


    async findBySlug(slug: string): Promise<Boolean> {

        const product = await Model.findOne({ slug })
        return product !== null;
    }

    async findById(id: string): Promise<Boolean> {

        const product = await Model.findOne({ _id: id })
        return product === null;

    }

    async update(id: string, product: Product): Promise<void> {

        await Model.findByIdAndUpdate(id, product, { new: true });

    }

}
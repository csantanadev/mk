import { IDeleteProductRepository } from './../../IDeleteProductRepository';
import Model from './schema/ProductSchemaMongoDb'


export class DeleteProductRepositoryMongoDb implements IDeleteProductRepository {

    async findById(id: string): Promise<Boolean> {

        const product = await Model.findOne({ _id: id })
        return product === null;

    }

    async delete(id: string): Promise<void> {

        await Model.findByIdAndDelete(id);

    }

}
import { NotFoundError } from '../../../shared/NotFoundError';
import { IDeleteProductRepository } from './../../../repositories/Product/IDeleteProductRepository';

export class DeleteProductUseCase {

    constructor(private readonly deleteProductRepository: IDeleteProductRepository) { }

    async execute(id: string) {

        const productExists = await this.deleteProductRepository.findById(id);

        if (!productExists) {
            throw new NotFoundError('Product does not exists.')
        }

        await this.deleteProductRepository.delete(id);
    }

}
import { BadRequestError } from './../../../shared/BadRequestError';
import { Product } from './../../../entities/Product';
import { IUpdateProductDto } from './IUpdateProductDTO';
import { IUpdateProductRepository } from './../../../repositories/Product/IUpdateProductRepository';
import { NotFoundError } from '../../../shared/NotFoundError';

export class UpdateProductUseCase {

    constructor(private readonly updateProductRepository: IUpdateProductRepository) { }

    async execute(id: string, data: IUpdateProductDto) {

        const productExists = await this.updateProductRepository.findById(id);

        if (!productExists) {
            throw new NotFoundError('Product does not exists.')
        }

        if (data.slug) {
            const slugExists = await this.updateProductRepository.findBySlug(data.slug);

            if (slugExists) {
                throw new BadRequestError('Slug already exists.')
            }
        }

        const product = new Product(data);
        await this.updateProductRepository.update(id, product);
    }

}
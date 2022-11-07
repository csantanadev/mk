import { Product } from './../../../entities/Product';
import { ICreateProductDto } from './ICreateProductDTO';
import { ICreateProductRepository } from './../../../repositories/Product/ICreateProductRepository';
import { BadRequestError } from '../../../shared/BadRequestError';


export class CreateProductUseCase {

    constructor(private readonly createProductRepository: ICreateProductRepository) { }

    async execute(data: ICreateProductDto) {

        const productExists = await this.createProductRepository.findBySlug(data.slug);

        if (productExists) {
            throw new BadRequestError('Product already exists.')
        }

        const product = new Product(data);
        const result = await this.createProductRepository.create(product);
        return result;
    }

}
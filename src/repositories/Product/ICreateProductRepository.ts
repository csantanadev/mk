import { Product } from './../../entities/Product';

export interface ICreateProductRepository {

    findBySlug(slug: string): Promise<Boolean>;

    create(product: Product): Promise<Product>;

}
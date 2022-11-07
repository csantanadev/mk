import { Product } from './../../entities/Product';

export interface IUpdateProductRepository {

    findById(id: string): Promise<Boolean>;

    findBySlug(slug: string): Promise<Boolean>;

    update(id: string, product: Product): Promise<void>;

}
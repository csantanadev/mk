import { Product } from './../../entities/Product';

type Between = {
    $gt: number
    $lt: number
}

export type Filter = {
    name?: string
    brand?: string
    seller?: string
    price?: Between
    page?: number
}

export interface ISearchProductRepository {

    find(filter: Filter): Promise<Product[]>;

    findBySlug(slug: string): Promise<Product>;


}
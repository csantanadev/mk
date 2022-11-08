import { ISearchProductRepository, Filter } from './../../../repositories/Product/ISearchProductRepository';


export class SearchProductUseCase {

    constructor(private readonly searchProductRepository: ISearchProductRepository) { }

    async find(filter: Filter) {
        return await this.searchProductRepository.find(filter);
    }

    async findBySlug(slug: string) {

        return await this.searchProductRepository.findBySlug(slug);

    }

    

}
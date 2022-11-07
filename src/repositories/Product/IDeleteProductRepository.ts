export interface IDeleteProductRepository {

    findById(id: string): Promise<Boolean>;

    delete(id: string): Promise<void>;

}
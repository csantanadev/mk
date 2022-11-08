import { StatusCodes } from 'http-status-codes';
import { Request, Response } from "express";
import { SearchProductUseCase } from './SearchProductUseCase';

export class SearchProductController {

    constructor(private readonly searchProductUseCase: SearchProductUseCase) { }

    find = async (request: Request, response: Response): Promise<Response> => {

        let filter = request.query;
        const price: any = filter.price;

        if (price) {
            filter['price'] = {
                $gt: price.split('-')[0],
                $lt: price.split('-')[1],
            }
        }

        try {
            const result = await this.searchProductUseCase.find(filter)

            return response.json(result);

        } catch (err) {
            if (err.isOperational) {
                return response.status(err.statusCode).json({
                    message: err.message || 'Unexpected error.'
                })
            }
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

    findBySlug = async (request: Request, response: Response): Promise<Response> => {

        try {
            const { slug } = request.params;

            const result = await this.searchProductUseCase.findBySlug(slug);

            return response.json(result);

        } catch (err) {
            if (err.isOperational) {
                return response.status(err.statusCode).json({
                    message: err.message || 'Unexpected error.'
                })
            }
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}
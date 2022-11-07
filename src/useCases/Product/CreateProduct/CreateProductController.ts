import { StatusCodes } from 'http-status-codes';
import { Request, Response } from "express";
import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductController {

    constructor(private readonly createProductUseCase: CreateProductUseCase) { }

    handle = async (request: Request, response: Response): Promise<Response> => {
        try {
            const data = request.body;

            const result = await this.createProductUseCase.execute(data)

            return response.status(StatusCodes.CREATED).json(result);

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
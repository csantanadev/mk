import { StatusCodes } from 'http-status-codes';
import { Request, Response } from "express";
import { UpdateProductUseCase } from './UpdateProductUseCase';

export class UpdateProductController {

    constructor(private readonly updateProductUseCase: UpdateProductUseCase) { }

    handle = async (request: Request, response: Response): Promise<Response> => {

        const data = request.body;
        const { id } = request.params;

        try {
            await this.updateProductUseCase.execute(id, data)

            return response.status(StatusCodes.NO_CONTENT).send();

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
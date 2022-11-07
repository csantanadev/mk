import { StatusCodes } from 'http-status-codes';
import { Request, Response } from "express";
import { DeleteProductUseCase } from './DeleteProductUseCase';

export class DeleteProductController {

    constructor(private readonly deleteProductUseCase: DeleteProductUseCase) { }

    handle = async (request: Request, response: Response): Promise<Response> => {

        const { id } = request.params;

        try {
            await this.deleteProductUseCase.execute(id);

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
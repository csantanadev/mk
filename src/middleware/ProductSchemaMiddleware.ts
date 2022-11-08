import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from "express";
import { productSchema } from "../viewModel/ProductSchema";

const productSchemaValidator = async (request: Request, response: Response, next: NextFunction) => {

    try {
        const valid = await productSchema.validate(request.body)
        if (valid) {
            next()
        }
    } catch (error) {
        return response.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

}

export { productSchemaValidator }
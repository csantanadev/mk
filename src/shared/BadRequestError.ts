import { ApiError } from './APIError';
import { StatusCodes } from 'http-status-codes';

export class BadRequestError extends ApiError {

    constructor(public message: string) {
        super(message, StatusCodes.BAD_REQUEST, true);
    }

}
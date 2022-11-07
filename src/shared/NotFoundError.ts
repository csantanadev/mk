import { ApiError } from './APIError';
import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends ApiError {

    constructor(public message: string) {
        super(message, StatusCodes.NOT_FOUND, true);
    }

}
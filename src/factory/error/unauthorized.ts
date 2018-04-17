// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { PecorinoError } from './pecorino';

/**
 * UnauthorizedError
 */
export default class UnauthorizedError extends PecorinoError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Unauthorized.';
        }

        super(ErrorCode.Unauthorized, actualMessage);

        setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

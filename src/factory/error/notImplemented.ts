// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { PecorinoError } from './pecorino';

/**
 * NotImplementedError
 */
export default class NotImplementedError extends PecorinoError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Method is not yet implemented.';
        }

        super(ErrorCode.NotImplemented, actualMessage);

        setPrototypeOf(this, NotImplementedError.prototype);
    }
}

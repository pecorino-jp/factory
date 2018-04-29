// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { PecorinoError } from './pecorino';

/**
 * ServiceUnavailableError
 */
export default class ServiceUnavailableError extends PecorinoError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Service unavailable temporarily.';
        }

        super(ErrorCode.ServiceUnavailable, actualMessage);

        setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}

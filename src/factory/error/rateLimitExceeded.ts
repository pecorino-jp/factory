// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { PecorinoError } from './pecorino';

/**
 * RateLimitExceededError
 */
export default class RateLimitExceededError extends PecorinoError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.RateLimitExceeded, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}

// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { PecorinoError } from './pecorino';

/**
 * ForbiddenError
 */
export default class ForbiddenError extends PecorinoError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Forbidden.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.Forbidden, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, ForbiddenError.prototype);
    }
}

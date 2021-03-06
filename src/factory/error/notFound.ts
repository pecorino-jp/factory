// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { PecorinoError } from './pecorino';

/**
 * NotFoundError
 */
export default class NotFoundError extends PecorinoError {
    public readonly entityName: string;

    constructor(entityName: string, message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `Not Found: ${entityName}.`;
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.NotFound, actualMessage)/* istanbul ignore next */;

        this.entityName = entityName;

        setPrototypeOf(this, NotFoundError.prototype);
    }
}

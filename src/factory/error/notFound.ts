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

        super(ErrorCode.NotFound, actualMessage);

        this.entityName = entityName;

        setPrototypeOf(this, NotFoundError.prototype);
    }
}

// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { PecorinoError } from './pecorino';

/**
 * AlreadyInUseError
 */
export default class AlreadyInUseError extends PecorinoError {
    public readonly entityName: string;
    public readonly fieldNames: string[];

    constructor(entityName: string, fieldNames: string[], message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `The specified '${entityName}' value is already in use for: ${fieldNames.join(', ')}.`;
        }

        super(ErrorCode.AlreadyInUse, actualMessage);

        this.entityName = entityName;
        this.fieldNames = fieldNames;

        setPrototypeOf(this, AlreadyInUseError.prototype);
    }
}

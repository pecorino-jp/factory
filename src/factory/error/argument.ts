// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { PecorinoError } from './pecorino';

/**
 * ArgumentError
 */
export default class ArgumentError extends PecorinoError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `Invalid or missing argument supplied: ${argumentName}.`;
        }

        super(ErrorCode.Argument, actualMessage);

        this.argumentName = argumentName;

        setPrototypeOf(this, ArgumentError.prototype);
    }
}

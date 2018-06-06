import ErrorCode from '../errorCode';

/**
 * PecorinoError
 * @extends {Error}
 */
export class PecorinoError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        // tslint:disable-next-line:no-single-line-block-comment
        super(message)/* istanbul ignore next */;

        this.name = 'PecorinoError';
        this.reason = code;
    }
}

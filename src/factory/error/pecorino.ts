import ErrorCode from '../errorCode';

/**
 * PecorinoError
 * @extends {Error}
 */
export class PecorinoError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        super(message);

        this.name = 'PecorinoError';
        this.reason = code;
    }
}

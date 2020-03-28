import { IAccount, IAnonymousLocation, IAttributes as IMoneyTransferActionAttributes } from '../action/transfer/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type IRecipient = TransactionFactory.IRecipient;
export type IAgent = TransactionFactory.IAgent;

/**
 * 取引開始パラメーターインターフェース
 */
export type IStartParams = TransactionFactory.IStartParams<TransactionType.Withdraw, IAgent, IRecipient, IObject>;

export type IResult = any;

/**
 * エラーインターフェース
 */
export type IError = any;

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    clientUser?: IClientUser;
    /**
     * 金額
     */
    amount: number;
    /**
     * 出金元
     */
    fromLocation: IAccount;
    /**
     * 出金先
     */
    toLocation?: IAnonymousLocation;
    description?: string;
}

export interface IPotentialActions {
    moneyTransfer: IMoneyTransferActionAttributes;
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 出金取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

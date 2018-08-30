import * as AccountFactory from '../../account';
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import SortType from '../../sortType';
import TransactionType from '../../transactionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 口座以外の匿名場所インターフェース
 */
export interface IAnonymousLocation {
    /**
     * ロケーションタイプ
     */
    typeOf: string;
    /**
     * ロケーションID
     */
    id?: string;
    /**
     * ロケーション名
     */
    name?: string;
}
/**
 * 口座インターフェース
 */
export interface IAccount<T extends AccountFactory.AccountType> {
    typeOf: AccountFactory.TypeOf.Account;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber: string;
    /**
     * 口座名義
     */
    name: string;
}
/**
 * 転送元あるいは転送先の場所インターフェース
 */
export type ILocation<T extends AccountFactory.AccountType> = IAnonymousLocation | IAccount<T>;
export type IObject = any;
export type IResult = any;
export type IPotentialActions = any;
/**
 * アクションの目的インターフェース
 * ここでは、取引が目的となる
 */
export interface IPurpose {
    /**
     * 取引タイプ
     */
    typeOf: TransactionType;
    /**
     * 取引ID
     */
    id: string;
}
export interface IAttributes<T extends AccountFactory.AccountType> extends ActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.MoneyTransfer;
    /**
     * どんな取引によって発生した転送アクションか
     */
    purpose: IPurpose;
    /**
     * 金額
     */
    amount: number;
    /**
     * 転送元
     */
    fromLocation: ILocation<T>;
    /**
     * 転送先
     */
    toLocation: ILocation<T>;
}
export type IAction<T extends AccountFactory.AccountType> = ActionFactory.IAction<IAttributes<T>>;
/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    /**
     * アクション完了日時順
     */
    endDate?: SortType;
    /**
     * 金額順
     */
    amount?: SortType;
}
/**
 * 検索条件インターフェース
 */
export interface ISearchConditions<T extends AccountFactory.AccountType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber: string;
}

import AccountStatusType from './accountStatusType';
import { IProject } from './project';
import SortType from './sortType';
import TransactionType from './transactionType';

/**
 * 口座タイプ
 */
export enum TypeOf {
    /**
     * 普通口座タイプ
     */
    Account = 'Account'
}

/**
 * 口座タイプ
 * Pecorinoサービス利用側で定義&管理する想定
 */
export type AccountType = string;

/**
 * 進行中取引インターフェース
 */
export interface IPendingTransaction {
    typeOf: TransactionType;
    /**
     * 取引ID
     */
    id: string;
    /**
     * 取引金額
     */
    amount: number;
}

/**
 * 口座インターフェース
 */
export interface IAccount<T extends AccountType> {
    project: IProject;
    typeOf: TypeOf;
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
    /**
     * 残高
     */
    balance: number;
    /**
     * 利用可能残高
     */
    availableBalance: number;
    /**
     * 進行中取引リスト
     */
    pendingTransactions: IPendingTransaction[];
    /**
     * 口座開設日時
     */
    openDate: Date;
    /**
     * 口座閉鎖日時
     */
    closeDate?: Date;
    /**
     * 口座ステータス
     */
    status: AccountStatusType;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    /**
     * 口座番号順
     */
    // accountNumber?: SortType;
    /**
     * 開設日時順
     */
    openDate?: SortType;
    /**
     * 残高順
     */
    // balance?: SortType;
}

export interface IProjectSearchConditions {
    id?: {
        $eq?: string;
        $ne?: string;
    };
}

/**
 * 口座検索条件インターフェース
 */
export interface ISearchConditions<T extends AccountType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号リスト
     */
    accountNumbers?: string[];
    project?: IProjectSearchConditions;
    /**
     * 口座ステータスリスト
     */
    statuses?: AccountStatusType[];
    /**
     * 口座名義
     */
    name?: string;
}

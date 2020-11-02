import AccountStatusType from './accountStatusType';
import { IProject } from './project';
import SortType from './sortType';
import TransactionType from './transactionType';

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
export interface IAccount {
    project: IProject;
    /**
     * 口座種別
     */
    typeOf: string;
    /**
     * 口座タイプ
     */
    accountType: string;
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
     * 開設日時順
     */
    openDate?: SortType;
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
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    accountNumber?: {
        $eq?: string;
        $in?: string[];
        $regex?: string;
    };
    accountNumbers?: string[];
    accountType?: string;
    name?: {
        $regex?: string;
    };
    openDate?: {
        $gte?: Date;
        $lte?: Date;
    };
    project?: IProjectSearchConditions;
    statuses?: AccountStatusType[];
    typeOf?: {
        $eq?: string;
        $in?: string[];
    };
}

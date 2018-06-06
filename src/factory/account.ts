/**
 * 口座ファクトリー
 */
import AccountStatusType from './accountStatusType';
import TransactionType from './transactionType';

/**
 * 口座タイプ
 */
export enum AccountType {
    /**
     * 普通口座タイプ
     */
    Account = 'Account'
}

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
    /**
     * 口座タイプ
     */
    typeOf: AccountType;
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

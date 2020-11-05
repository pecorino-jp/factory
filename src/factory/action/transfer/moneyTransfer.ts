import * as ActionFactory from '../../action';
import ActionStatusType from '../../actionStatusType';
import ActionType from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import SortType from '../../sortType';
import { IThing } from '../../thing';
import TransactionType from '../../transactionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 口座以外の匿名場所インターフェース
 */
export interface IAnonymousLocation extends IThing {
    /**
     * ロケーションタイプ
     */
    typeOf: string;
    /**
     * ロケーションID
     */
    id?: string;
}

/**
 * 口座インターフェース
 */
export interface IAccount {
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
    name?: string;
}

/**
 * 転送元あるいは転送先の場所インターフェース
 */
export type ILocation = IAnonymousLocation | IAccount;

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

export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.MoneyTransfer;
    /**
     * どんな取引によって発生した転送アクションか
     */
    purpose: IPurpose;
    /**
     * 金額
     */
    amount: IMonetaryAmount;
    /**
     * 転送元
     */
    fromLocation: ILocation;
    /**
     * 転送先
     */
    toLocation: ILocation;
}

export type IAction = ActionFactory.IAction<IAttributes>;

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    /**
     * アクション開始日時順
     */
    startDate?: SortType;
}

export interface IProjectSearchConditions {
    id?: {
        $eq?: string;
        $ne?: string;
    };
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 口座タイプ
     */
    accountType?: string;
    /**
     * 口座番号
     */
    accountNumber?: string;
    actionStatus?: {
        $in?: ActionStatusType[];
    };
    project?: IProjectSearchConditions;
    purpose?: {
        typeOf?: { $eq?: string };
        id?: { $eq?: string };
    };
    startDate?: {
        $gte?: Date;
        $lte?: Date;
    };
}

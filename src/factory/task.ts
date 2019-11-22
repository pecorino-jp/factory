import { IExtendId } from './autoGenerated';
import { IProject } from './project';
import SortType from './sortType';
import TaskName from './taskName';
import TaskStatus from './taskStatus';

export type IData = any;

/**
 * タスク実行結果インターフェース
 */
export interface IExecutionResult {
    executedAt: Date;
    error: any;
}

/**
 * タスク属性インターフェース
 */
export interface IAttributes {
    project: IProject;
    /**
     * タスク名
     */
    name: TaskName;
    /**
     * タスク状況
     */
    status: TaskStatus;
    /**
     * いつ実行するか
     */
    runsAt: Date;
    /**
     * あと何回トライできるか
     */
    remainingNumberOfTries: number;
    /**
     * 最終トライ日時
     */
    lastTriedAt?: Date;
    /**
     * すでにトライした回数
     */
    numberOfTried: number;
    /**
     * 実行結果リスト
     */
    executionResults: IExecutionResult[];
    /**
     * データ
     * TaskNameによってインターフェースが決定する
     */
    data: IData;
}

/**
 * タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    runsAt?: SortType;
    lastTriedAt?: SortType;
    numberOfTried?: SortType;
}

/**
 * 注文検索条件インターフェース
 */
export interface ISearchConditions<T extends TaskName | string> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    name?: T;
    statuses?: TaskStatus[];
    runsFrom?: Date;
    runsThrough?: Date;
    lastTriedFrom?: Date;
    lastTriedThrough?: Date;
}

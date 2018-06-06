/**
 * タスクファクトリー
 * @namespace task
 */
import { IExtendId } from './autoGenerated';
import * as TaskExecutionResult from './taskExecutionResult';
import TaskName from './taskName';
import TaskStatus from './taskStatus';

export type ITask = IExtendId<IAttributes>;

export interface IAttributes {
    name: TaskName;
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
    lastTriedAt: Date | null;
    /**
     * すでにトライした回数
     */
    numberOfTried: number;
    /**
     * 実行結果リスト
     */
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    /**
     * データ
     * TaskNameによってインターフェースが決定する
     */
    data: any;
}

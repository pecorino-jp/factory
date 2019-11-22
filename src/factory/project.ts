import SortType from './sortType';

/**
 * 通知パラメータ
 */
export interface IInformParams {
    /**
     * 通知先
     */
    recipient?: {
        /**
         * 通知URL
         */
        url?: string;
    };
}

/**
 * プロジェクト設定インターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface ISettings {
}

/**
 * プロジェクトインターフェース
 */
export interface IProject {
    typeOf: 'Project';
    id: string;
    alternateName?: string;
    description?: string;
    email?: string;
    logo?: string;
    name?: string;
    telephone?: string;
    url?: string;
    settings?: ISettings;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    _id?: SortType;
}

/**
 * プロジェクト検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    ids?: string[];
    /**
     * 名称
     */
    name?: string;
}

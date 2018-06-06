/**
 * 作品ファクトリー
 * @namespace creativeWork
 */
import CreativeWorkType from './creativeWorkType';

export interface ICopyrightHolder {
    name: string;
}

export interface ICreativeWork {
    typeOf: CreativeWorkType;
    identifier: string;
    name: string;
    description?: string;
    copyrightHolder?: ICopyrightHolder;
    copyrightYear?: number;
    datePublished?: Date;
    license?: string;
    thumbnailUrl?: string;
}

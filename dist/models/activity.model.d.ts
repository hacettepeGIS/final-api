/// <reference types="node" />
import { Entity } from '@loopback/repository';
export declare class Activity extends Entity {
    id?: number;
    username: string;
    activityTypeId: number;
    location: string;
    time: string;
    photo?: Buffer;
    [prop: string]: any;
    constructor(data?: Partial<Activity>);
}
export interface ActivityRelations {
}
export declare type ActivityWithRelations = Activity & ActivityRelations;

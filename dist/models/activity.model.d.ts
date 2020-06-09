/// <reference types="node" />
import { Entity } from '@loopback/repository';
import { Geometry } from "geojson";
export declare class Activity extends Entity {
    id?: number;
    ip: string;
    name?: string;
    activityTypeId: number;
    geomerty: Geometry;
    time: string;
    photo?: Buffer;
    [prop: string]: any;
    constructor(data?: Partial<Activity>);
    to(geojson: Geometry): string;
    from(wkb: any): {};
}
export interface ActivityRelations {
}
export declare type ActivityWithRelations = Activity & ActivityRelations;

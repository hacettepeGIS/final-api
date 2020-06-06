import { Entity } from '@loopback/repository';
export declare class ActivityTypes extends Entity {
    id?: number;
    name: string;
    constructor(data?: Partial<ActivityTypes>);
}
export interface ActivityTypesRelations {
}
export declare type ActivityTypesWithRelations = ActivityTypes & ActivityTypesRelations;

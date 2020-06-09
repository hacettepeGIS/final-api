import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Activity } from '../models';
import { ActivityRepository } from '../repositories';
import { GeoJSON } from 'leaflet';
export declare class ActivityController {
    activityRepository: ActivityRepository;
    constructor(activityRepository: ActivityRepository);
    create(activity: GeoJSON): Promise<Activity>;
    count(where?: Where<Activity>): Promise<Count>;
    find(filter?: Filter<Activity>): Promise<Activity[]>;
    updateAll(activity: Activity, where?: Where<Activity>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Activity>): Promise<Activity>;
    updateById(id: number, activity: Activity): Promise<void>;
    replaceById(id: number, activity: Activity): Promise<void>;
    deleteById(id: number): Promise<void>;
}

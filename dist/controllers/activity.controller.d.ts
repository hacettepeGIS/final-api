import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { Activity } from '../models';
import { ActivityRepository } from '../repositories';
import { GeoJSON } from 'leaflet';
export declare class ActivityController {
    activityRepository: ActivityRepository;
    constructor(activityRepository: ActivityRepository);
    create(activity: GeoJSON): Promise<Activity>;
    findById(id: number, filter?: FilterExcludingWhere<Activity>): Promise<Activity>;
    find(filter?: Filter<Activity>): Promise<Activity[]>;
}

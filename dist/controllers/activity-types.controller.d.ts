import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ActivityTypes } from '../models';
import { ActivityTypesRepository } from '../repositories';
export declare class ActivityTypesController {
    activityTypesRepository: ActivityTypesRepository;
    constructor(activityTypesRepository: ActivityTypesRepository);
    count(where?: Where<ActivityTypes>): Promise<Count>;
    find(filter?: Filter<ActivityTypes>): Promise<ActivityTypes[]>;
    findById(id: number, filter?: FilterExcludingWhere<ActivityTypes>): Promise<ActivityTypes>;
}

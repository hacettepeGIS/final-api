import { Filter } from '@loopback/repository';
import { ActivityTypes } from '../models';
import { ActivityTypesRepository } from '../repositories';
export declare class ActivityTypesController {
    activityTypesRepository: ActivityTypesRepository;
    constructor(activityTypesRepository: ActivityTypesRepository);
    find(filter?: Filter<ActivityTypes>): Promise<ActivityTypes[]>;
}

import { DefaultCrudRepository } from '@loopback/repository';
import { ActivityTypes, ActivityTypesRelations } from '../models';
import { HerokudbDataSource } from '../datasources';
export declare class ActivityTypesRepository extends DefaultCrudRepository<ActivityTypes, typeof ActivityTypes.prototype.id, ActivityTypesRelations> {
    constructor(dataSource: HerokudbDataSource);
}

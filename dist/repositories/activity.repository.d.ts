import { DefaultCrudRepository } from '@loopback/repository';
import { Activity, ActivityRelations } from '../models';
import { HerokudbDataSource } from '../datasources';
export declare class ActivityRepository extends DefaultCrudRepository<Activity, typeof Activity.prototype.id, ActivityRelations> {
    constructor(dataSource: HerokudbDataSource);
}

import {DefaultCrudRepository} from '@loopback/repository';
import {Activity, ActivityRelations} from '../models';
import {HerokudbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ActivityRepository extends DefaultCrudRepository<
  Activity,
  typeof Activity.prototype.id,
  ActivityRelations
> {
  constructor(
    @inject('datasources.herokudb') dataSource: HerokudbDataSource,
  ) {
    super(Activity, dataSource);
  }
}

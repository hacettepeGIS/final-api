import {DefaultCrudRepository} from '@loopback/repository';
import {ActivityTypes, ActivityTypesRelations} from '../models';
import {HerokudbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ActivityTypesRepository extends DefaultCrudRepository<
  ActivityTypes,
  typeof ActivityTypes.prototype.id,
  ActivityTypesRelations
> {
  constructor(
    @inject('datasources.herokudb') dataSource: HerokudbDataSource,
  ) {
    super(ActivityTypes, dataSource);
  }
}

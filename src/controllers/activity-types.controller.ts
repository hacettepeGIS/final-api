import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {ActivityTypes} from '../models';
import {ActivityTypesRepository} from '../repositories';

export class ActivityTypesController {
  constructor(
    @repository(ActivityTypesRepository)
    public activityTypesRepository : ActivityTypesRepository,
  ) {}

  @get('/activity-types', {
    responses: {
      '200': {
        description: 'Array of ActivityTypes model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ActivityTypes, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ActivityTypes) filter?: Filter<ActivityTypes>,
  ): Promise<ActivityTypes[]> {
    return this.activityTypesRepository.find(filter);
  }
}

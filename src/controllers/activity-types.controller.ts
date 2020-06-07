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

  @get('/activity-types/count', {
    responses: {
      '200': {
        description: 'ActivityTypes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ActivityTypes) where?: Where<ActivityTypes>,
  ): Promise<Count> {
    return this.activityTypesRepository.count(where);
  }

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

  @get('/activity-types/{id}', {
    responses: {
      '200': {
        description: 'ActivityTypes model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ActivityTypes, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ActivityTypes, {exclude: 'where'}) filter?: FilterExcludingWhere<ActivityTypes>
  ): Promise<ActivityTypes> {
    return this.activityTypesRepository.findById(id, filter);
  }
}

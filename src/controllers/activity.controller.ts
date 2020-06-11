import {
  Filter,
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  requestBody,
} from '@loopback/rest';
import {Activity} from '../models';
import {ActivityRepository} from '../repositories';
import { GeoJSON } from 'leaflet'
import * as wkx from "wkx";

export class ActivityController {
  constructor(
    @repository(ActivityRepository)
    public activityRepository : ActivityRepository,
  ) {}

  @post('/activities', {
    responses: {
      '200': {
        description: 'Activity model instance',
        content: {'application/json': {schema: getModelSchemaRef(GeoJSON)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GeoJSON, {partial: true}),
        },
      },
    })
    activity: GeoJSON,
  ): Promise<Activity> {
      return await this.activityRepository.create({
        ip:(<any>activity).properties.ip,
        name:(<any>activity).properties.name,
        activityTypeId:(<any>activity).properties.activityTypeId,
        time:new Date().toString(),
        geometry:wkx.Geometry.parseGeoJSON((<any>activity).geometry).toWkt(),
        // ST_GeomFromText(geometry)
        photo:undefined,
        duration:(<any>activity).properties.duration,
        distance:(<any>activity).properties.distance
      });    
      // to(geojson: Geometry) {
      //   return wkx.Geometry.parseGeoJSON(geojson).toWkt();
      // } 
      // from(wkb: any) {
      //   return wkx.Geometry.parse(new Buffer(wkb, "hex")).toGeoJSON();
      // }
  }

  @get('/activities/{id}', {
    responses: {
      '200': {
        description: 'Activity model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Activity, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Activity, {exclude: 'where'}) filter?: FilterExcludingWhere<Activity>
  ): Promise<Activity> {
    return this.activityRepository.findById(id, filter);
  }

  @get('/activities', {
    responses: {
      '200': {
        description: 'Array of Activity model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Activity, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Activity) filter?: Filter<Activity>,
  ): Promise<Activity[]> {
    return this.activityRepository.find(filter);
  }
}

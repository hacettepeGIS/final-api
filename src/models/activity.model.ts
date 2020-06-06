import {Entity, model, property} from '@loopback/repository';
import { ActivityTypes } from './activity-types.model';

@model({settings: {strict: false}})
export class Activity extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: ActivityTypes,
    required: true,
  })
  activityTypeId: number;

  @property({
    type: 'geopoint',
    required: true,
  })
  location: string;

  @property({
    type: 'date',
    required: true,
  })
  time: string;

  @property({
    type: 'buffer',
  })
  photo?: Buffer;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Activity>) {
    super(data);
  }
}

export interface ActivityRelations {
  // describe navigational properties here
}

export type ActivityWithRelations = Activity & ActivityRelations;

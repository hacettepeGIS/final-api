import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
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
  ip: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
    required: true,
  })
  activityTypeId: number;

  @property({
    type: 'string',
    required: true,
  })
  geometry: string;

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

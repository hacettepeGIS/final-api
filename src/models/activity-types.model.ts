import {Entity, model, property} from '@loopback/repository';

@model()
export class ActivityTypes extends Entity {
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
  name: string;


  constructor(data?: Partial<ActivityTypes>) {
    super(data);
  }
}

export interface ActivityTypesRelations {
  // describe navigational properties here
}

export type ActivityTypesWithRelations = ActivityTypes & ActivityTypesRelations;

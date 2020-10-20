import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { WeatherObject } from 'src/app/weather';

export interface WeatherState extends EntityState<WeatherObject> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'weather', idKey: 'id' })
export class WeatherStore extends EntityStore<WeatherState, WeatherObject> {

  constructor() {
    super();
  }

}


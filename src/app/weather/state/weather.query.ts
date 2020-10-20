import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WeatherObject } from 'src/app/weather';
import { WeatherStore, WeatherState } from './weather.store';

@Injectable({
  providedIn: 'root'
})
export class WeatherQuery extends QueryEntity<WeatherState, WeatherObject> {

  constructor(protected store: WeatherStore) {
    super(store);
  }

}

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { WeatherObject } from '../weather';

export interface WeatherState extends EntityState<WeatherObject> {
  coord: null;
  weather: null;
  base: null;
  main: null;
  visibility: null;
  wind: null;
  clouds: null;
  dt: null;
  sys: null;
  timezone: null;
  id: null;
  name: null;
  cod: null;
}

@StoreConfig({ name: 'weather' })
export class WeatherStore extends EntityStore<WeatherState> {
  constructor() {
    super();
  }
}


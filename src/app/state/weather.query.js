import { createEntityQuery } from '@datorama/akita';
import { weatherStore } from './weather.store';

export const weatherQuery = createEntityQuery(weatherStore);

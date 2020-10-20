import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { WeatherStore } from './weather.store';
import { WeatherObject } from 'src/app/weather';
import { SessionService } from 'src/app/state/session.service';
import { WeatherQuery } from './weather.query';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  private appIdComponent = '&appid=';

  constructor(private weatherStore: WeatherStore,
    private http: HttpClient,
    private authService: SessionService, 
    private weatherQuery: WeatherQuery) {
  }

  get(city: string) {
    console.log(`WeatherService: Trying to get weather in: ${city}`);
    let url = this.url + city + this.appIdComponent + this.authService.currentToken();

    console.log(`WeatherService: ${url}`);
    this.http.get<WeatherObject>(url).subscribe((entity) => this.add(entity));
  }

  add(weather: WeatherObject) {
    this.weatherStore.add(weather);
  }

  update(id, weather: Partial<WeatherObject>) {
    this.weatherStore.update(id, weather);
  }

  remove(id: ID) {
    this.weatherStore.remove(id);
  }
}

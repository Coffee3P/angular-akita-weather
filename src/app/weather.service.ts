import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { SessionService } from './state/session.service';
import { WeatherObject } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  private appIdComponent = '&appid=';

  constructor(private http: HttpClient, 
    private authService: SessionService) { }

  getWeather(city: string): Observable<WeatherObject> {
    console.log(`WeatherService: Trying to get weather in: ${city}`);
    let url = this.url + city + this.appIdComponent + this.authService.currentToken();

    console.log(`WeatherService: ${url}`);

    return this.http.get<WeatherObject>(url);
  }
}

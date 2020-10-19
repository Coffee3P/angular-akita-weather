import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionQuery } from '../state/session.query';
import { WeatherObject } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  name$: Observable<string>;
  weather$: Observable<WeatherObject>;

  constructor(private authQuery: SessionQuery, 
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.name$ = this.authQuery.name$;

    this.authQuery.userCity$.subscribe(city => {
      if (city) {
        this.weather$ = this.weatherService.getWeather(city).pipe(tap(weather => console.log(`Current weather in: ${weather.name} is ${weather.main.temp - 273.15 }C`)));
      } else {
        console.log('No city to get weather for.')
      }
    });
  }
}

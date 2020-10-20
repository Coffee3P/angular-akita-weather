import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionQuery } from '../state/session.query';
import { WeatherQuery } from '../weather/state/weather.query';
import { WeatherObject } from '../weather';
import { WeatherService } from '../weather/state/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  name$: Observable<string>;
  weather$: Observable<WeatherObject>;

  constructor(private authQuery: SessionQuery, 
    private weatherService: WeatherService, 
    private weatherQuery: WeatherQuery) { }

  ngOnInit() {
    this.name$ = this.authQuery.name$;

    this.authQuery.userCity$.subscribe(city => {
      if (city) {
        this.weatherService.get(city)
        this.weather$ = this.weatherQuery.selectFirst();
      } else {
        console.log('No city to get weather for.')
      }
    });
  }
}

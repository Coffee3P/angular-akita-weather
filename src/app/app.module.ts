import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './topbar/topbar.component';
import { TemperaturePipe } from './temperature.pipe';
import { CelciusPipe } from './celcius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeatherComponent,
    TopbarComponent,
    TemperaturePipe,
    CelciusPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }

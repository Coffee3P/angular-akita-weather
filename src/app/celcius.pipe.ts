import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celcius'
})
export class CelciusPipe implements PipeTransform {

  transform(value: number): number {
    return value - 273.15;
  }

}

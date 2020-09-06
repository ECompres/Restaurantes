import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let result = value
      .replace("AW", "Aruba")
      .replace("CA", "Canadá")
      .replace("CN", "China")
      .replace("GP", "Guadalupe")
      .replace("HK", "Hong Kong")
      .replace("KN", "San Kitts y Nevis")
      .replace("KY", "Islas Caimán")
      .replace("MO", "Macao")
      .replace("MX", "México")
      .replace("MY", "Malasia")
      .replace("SV", "El Salvador")
      .replace("US", "Estados Unidos")
      .replace("VI", "Islas Virgenes Americanas")
    return result;
  }

}

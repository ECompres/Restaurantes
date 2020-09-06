import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    let res = value.replace("3","$$$")
    return  res ;
  }

}

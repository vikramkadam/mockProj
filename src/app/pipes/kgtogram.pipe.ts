import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kgtogram'
})
export class KgtogramPipe implements PipeTransform {

  transform(value: number): number {
    let result!:number;
    if(value != null)
    {
       result = value * 1000;
    }
    return result;
  }

}

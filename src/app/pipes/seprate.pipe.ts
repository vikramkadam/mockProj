import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seprate'
})
export class SepratePipe implements PipeTransform {

  transform(value: any): any {
   let result = JSON.stringify(value);
   return result;
  }

}

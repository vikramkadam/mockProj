import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenodd'
})
export class EvenoddPipe implements PipeTransform {

  transform(value:number ): boolean {
    
    if(value % 2 == 0 ) 
    {
        return true;
    }
    else
    {
      return false;
    }
  }

}

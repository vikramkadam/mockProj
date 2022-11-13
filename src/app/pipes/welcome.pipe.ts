import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value:string): string {
    let returnmsg = "Welcome : "+ value;
     return returnmsg;
  }

}

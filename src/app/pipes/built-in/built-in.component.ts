import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html'
  
})
export class BuiltInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  demoText:any = "Vikram Vitthalrao Kadam";
  titleCase:any = "title case is and angular API that belongs to CommonModule. It transforms text to title case. i.e capatializes the first letter of each word."  
  demoCurrency:any = 1225.101;
  currentDate:Date = new Date();
  demoSlice:any= "Vikram kadam";
  demoArray:any [] = [1,2,3,4,5,6,7];
  demoDecimalValue:number = 12.1234505454;
  num1:number = 2.5;

  myDetails ={
    id:101,
    name:'vikram kadam' ,
    address:'panchwati colony manwath'
  }

  time$ = new Observable<string> ((observer: Observer<string>) => {
    setInterval(() => {
      observer.next(new Date().toString()),1000
    })
  })


  

}

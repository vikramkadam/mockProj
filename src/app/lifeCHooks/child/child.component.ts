import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit ,OnChanges, DoCheck , AfterContentInit , AfterContentChecked ,AfterViewInit , AfterViewChecked ,OnDestroy{



  @Input() parentValue: any;

  counter:any;
  num :number =1;

  constructor() {
    console.log('constructor called: Dependency-Ijection Inject .');
   }


   ngOnChanges(changes: SimpleChanges): void {
     console.log('ngOnChanges called: when databoundy property i.e @Input() or @output() changes.')
     console.log(changes['parentValue'].currentValue);
   }

  ngOnInit(): void {
    console.log('ngOnInit called: Initialization Login i.e calling apis');

    // this.counter = setInterval(() => {
    //   this.num = this.num+1;
    //   console.log('Count Is:'+this.num);
    // }, 1000)
  }

  ngDoCheck(): void {
      console.log("ngDoCheck called: It Called after every change in component nad its child.");
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit called: It called only once during CLCH.');
  }
  

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called: called first time after ngContentInit() and everty time after ngDoCheck()');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called:It called only once during CLCH.');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called: called first time after ngAfterViewInit() and everty time after ngDoCheck()')
  }

   ngOnDestroy(): void {
     console.log('ngOnDestory called: called first before component gets destoryed.');
     clearInterval(this.counter);
   }


  xyz()
  {

  }

  

}

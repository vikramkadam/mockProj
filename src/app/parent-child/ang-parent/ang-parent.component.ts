import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-parent',
  templateUrl: './ang-parent.component.html',
  styleUrls: ['./ang-parent.component.scss']
})
export class AngParentComponent implements OnInit {

  constructor() { }

  pvalue:any;
  childValue:any;

  ngOnInit(): void {
  }
  getChildValue(event:any)
  {
    this.childValue = event.target.value;
  }
}

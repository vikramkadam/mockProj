import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  pValue:any;
  IsActive:boolean = false;

  ngOnInit(): void {
  }

  HideShowChild()
  {
    this.IsActive = !this.IsActive;
  }


  sendParentValue(val:any)
  {
    this.pValue = val;
  }

}

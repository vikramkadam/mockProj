import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ang-child',
  templateUrl: './ang-child.component.html',
  styleUrls: ['./ang-child.component.scss']
})
export class AngChildComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() receivedValue:any;
  @Output() EmitedValue = new  EventEmitter();
  

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.receivedValue = changes['receivedValue'].currentValue;
  }

  passValueToParent(event:any)
  {
      this.EmitedValue.emit(event);
  }

}

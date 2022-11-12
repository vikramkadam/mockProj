import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighterDir]'
})
export class HighlighterDirDirective implements AfterViewInit {

  constructor(private eleRef : ElementRef) { }

  @Input()appHighlighterDir :any;


  ngAfterViewInit(): void {

    this.eleRef.nativeElement.style.color = this.appHighlighterDir;

  }     


  @HostListener('mouseover')OnMouseOver() {
    this.addStyles();
  }

  @HostListener('mouseleave')OnMouseLeave() {
    this.removeStyles();
  }
  

  addStyles()
  {
    this.eleRef.nativeElement.style.color = 'blue';
    this.eleRef.nativeElement.style.height= '250px';
    this.eleRef.nativeElement.style.width= '350px';
  }

  removeStyles()
  {
    this.eleRef.nativeElement.style.color = '';
    this.eleRef.nativeElement.style.height= '';
    this.eleRef.nativeElement.style.width= '';
  }



}


//  myStyle ={'color':'purple','font-weight':'bolder'} 
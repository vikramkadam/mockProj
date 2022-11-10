import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRFComponent } from './nested-rf.component';

describe('NestedRFComponent', () => {
  let component: NestedRFComponent;
  let fixture: ComponentFixture<NestedRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

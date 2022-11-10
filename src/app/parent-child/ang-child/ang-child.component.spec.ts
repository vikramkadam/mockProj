import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngChildComponent } from './ang-child.component';

describe('AngChildComponent', () => {
  let component: AngChildComponent;
  let fixture: ComponentFixture<AngChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

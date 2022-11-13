import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chil1Component } from './chil1.component';

describe('Chil1Component', () => {
  let component: Chil1Component;
  let fixture: ComponentFixture<Chil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chil1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

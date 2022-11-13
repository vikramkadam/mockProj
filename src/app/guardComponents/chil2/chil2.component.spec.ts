import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chil2Component } from './chil2.component';

describe('Chil2Component', () => {
  let component: Chil2Component;
  let fixture: ComponentFixture<Chil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chil2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngParentComponent } from './ang-parent.component';

describe('AngParentComponent', () => {
  let component: AngParentComponent;
  let fixture: ComponentFixture<AngParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

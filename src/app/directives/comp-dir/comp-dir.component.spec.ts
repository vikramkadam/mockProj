import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDirComponent } from './comp-dir.component';

describe('CompDirComponent', () => {
  let component: CompDirComponent;
  let fixture: ComponentFixture<CompDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegformcandestoryComponent } from './regformcandestory.component';

describe('RegformcandestoryComponent', () => {
  let component: RegformcandestoryComponent;
  let fixture: ComponentFixture<RegformcandestoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegformcandestoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegformcandestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

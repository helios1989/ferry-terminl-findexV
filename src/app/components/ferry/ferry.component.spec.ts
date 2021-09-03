import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerryComponent } from './ferry.component';

describe('FerryComponent', () => {
  let component: FerryComponent;
  let fixture: ComponentFixture<FerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

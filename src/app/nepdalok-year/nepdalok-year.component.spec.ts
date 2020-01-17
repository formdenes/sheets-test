import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepdalokYearComponent } from './nepdalok-year.component';

describe('NepdalokYearComponent', () => {
  let component: NepdalokYearComponent;
  let fixture: ComponentFixture<NepdalokYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepdalokYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepdalokYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

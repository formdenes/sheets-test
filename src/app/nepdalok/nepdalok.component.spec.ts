import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepdalokComponent } from './nepdalok.component';

describe('NepdalokComponent', () => {
  let component: NepdalokComponent;
  let fixture: ComponentFixture<NepdalokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepdalokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepdalokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

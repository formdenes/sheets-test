import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JatekokYearComponent } from './jatekok-year.component';

describe('JatekokYearComponent', () => {
  let component: JatekokYearComponent;
  let fixture: ComponentFixture<JatekokYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JatekokYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JatekokYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JatekComponent } from './jatek.component';

describe('JatekComponent', () => {
  let component: JatekComponent;
  let fixture: ComponentFixture<JatekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JatekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JatekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

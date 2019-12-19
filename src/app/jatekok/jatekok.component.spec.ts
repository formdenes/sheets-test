import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JatekokComponent } from './jatekok.component';

describe('JatekokComponent', () => {
  let component: JatekokComponent;
  let fixture: ComponentFixture<JatekokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JatekokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JatekokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

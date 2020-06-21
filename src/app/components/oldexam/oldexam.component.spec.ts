import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldexamComponent } from './oldexam.component';

describe('OldexamComponent', () => {
  let component: OldexamComponent;
  let fixture: ComponentFixture<OldexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

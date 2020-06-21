import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexamComponent } from './newexam.component';

describe('NewexamComponent', () => {
  let component: NewexamComponent;
  let fixture: ComponentFixture<NewexamComponent>;

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

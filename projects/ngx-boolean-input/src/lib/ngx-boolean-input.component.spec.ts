import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBooleanInputComponent } from './ngx-boolean-input.component';

describe('NgxBooleanInputComponent', () => {
  let component: NgxBooleanInputComponent;
  let fixture: ComponentFixture<NgxBooleanInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBooleanInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBooleanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpTestComponent } from './http-test.component';

describe('HttpTestComponent', () => {
  let component: HttpTestComponent;
  let fixture: ComponentFixture<HttpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

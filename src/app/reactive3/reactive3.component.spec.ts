import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactive3Component } from './reactive3.component';

describe('Reactive3Component', () => {
  let component: Reactive3Component;
  let fixture: ComponentFixture<Reactive3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reactive3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactive3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactive1Component } from './reactive1.component';

describe('Reactive1Component', () => {
  let component: Reactive1Component;
  let fixture: ComponentFixture<Reactive1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reactive1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

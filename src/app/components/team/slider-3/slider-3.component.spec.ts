import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slider3Component } from './slider-3.component';

describe('Slider3Component', () => {
  let component: Slider3Component;
  let fixture: ComponentFixture<Slider3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Slider3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Slider3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideComponent } from './slide.component';

describe('SlideComponent', () => {
  let component: SlideComponent;
  let fixture: ComponentFixture<SlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when location is 0 should return calculateLocation of top=2 and left=2', () => {
    component.location = 0;
    component.calculateLocation();
    expect(component.top).toEqual(2);
    expect(component.left).toEqual(2);
  });

  it('when location is 1 should return calculateLocation of top=2 and left=52', () => {
    component.location = 1;
    component.calculateLocation();
    expect(component.top).toEqual(2);
    expect(component.left).toEqual(52);
  });

  it('when location is 3 should return calculateLocation of top=2 and left=152', () => {
    component.location = 3;
    component.calculateLocation();
    expect(component.top).toEqual(2);
    expect(component.left).toEqual(152);
  });

  it('when location is 4 should return calculateLocation of top=52 and left=2', () => {
    component.location = 4;
    component.calculateLocation();
    expect(component.top).toEqual(52);
    expect(component.left).toEqual(2);
  });

  it('when location is 15 should return calculateLocation of top=152 and left=152', () => {
    component.location = 15;
    component.calculateLocation();
    expect(component.top).toEqual(152);
    expect(component.left).toEqual(152);
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriveComponent } from './interive.component';

describe('InteriveComponent', () => {
  let component: InteriveComponent;
  let fixture: ComponentFixture<InteriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteriveComponent]
    });
    fixture = TestBed.createComponent(InteriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

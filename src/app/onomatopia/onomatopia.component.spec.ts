import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopiaComponent } from './onomatopia.component';

describe('OnomatopiaComponent', () => {
  let component: OnomatopiaComponent;
  let fixture: ComponentFixture<OnomatopiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnomatopiaComponent]
    });
    fixture = TestBed.createComponent(OnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

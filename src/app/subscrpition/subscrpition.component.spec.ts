import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscrpitionComponent } from './subscrpition.component';

describe('SubscrpitionComponent', () => {
  let component: SubscrpitionComponent;
  let fixture: ComponentFixture<SubscrpitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscrpitionComponent]
    });
    fixture = TestBed.createComponent(SubscrpitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

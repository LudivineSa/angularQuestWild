import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailListComponentComponent } from './cocktail-list-component.component';

describe('CocktailListComponentComponent', () => {
  let component: CocktailListComponentComponent;
  let fixture: ComponentFixture<CocktailListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailListComponentComponent]
    });
    fixture = TestBed.createComponent(CocktailListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

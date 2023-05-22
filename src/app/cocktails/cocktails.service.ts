import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';
import { COCKTAILS } from './cocktailList';

@Injectable({
  providedIn: 'root'
})

export class CocktailsService {

  constructor() { }

  public getCocktails(): Cocktail[] {
    return COCKTAILS;
  }
}

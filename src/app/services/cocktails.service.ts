import { Injectable } from '@angular/core';
import { Cocktail } from '../cocktails/cocktail.model';
import { COCKTAILS } from '../cocktails/cocktailList';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class CocktailsService {

  constructor(public http: HttpClient) { }

  public getCocktails(): Cocktail[] {
    return COCKTAILS;
  }

  public getCocktailsWithObservable(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>('assets/cocktails.json');
  }
}

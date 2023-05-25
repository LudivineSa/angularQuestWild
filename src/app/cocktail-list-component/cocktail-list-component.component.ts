import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../services/cocktails.service';
import { Cocktail } from '../cocktails/cocktail.model';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent {

  cocktails : Cocktail[] = [];
  cocktailsObservable : Cocktail[]= [];

  constructor(public cocktailsService: CocktailsService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailsService.getCocktails();
    this.cocktailsService.getCocktailsWithObservable().subscribe(cocktails => this.cocktailsObservable = cocktails)
  }

}

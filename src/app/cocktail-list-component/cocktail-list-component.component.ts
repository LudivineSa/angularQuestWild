import { Component } from '@angular/core';
import { CocktailsService } from '../cocktails/cocktails.service';
import { Cocktail } from '../cocktails/cocktail.model';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent {

  cocktails : Cocktail[] = [];

  constructor(public cocktailsService: CocktailsService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailsService.getCocktails();
  }

}

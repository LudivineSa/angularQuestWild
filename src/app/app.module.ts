import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';

import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { BlockComponent } from "./block/block.component";
import { MenuComponent } from "./menu/menu.component";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DeveloperComponentComponent } from './developer-component/developer-component.component';
import { SkillComponentComponent } from './skill-component/skill-component.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { OnomatopiaComponent } from './onomatopia/onomatopia.component';
import { KittenComponent } from './kitten/kitten.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    MenuComponent,
    UserComponent,
    SignUpComponent,
    SearchMovieComponent,
    DeveloperComponentComponent,
    SkillComponentComponent,
    CreateOnomatopiaComponent,
    OnomatopiaComponent,
    KittenComponent,
    CocktailListComponentComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(ROUTES), HttpClientModule],
  providers: [    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

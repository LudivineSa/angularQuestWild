import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
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
    SkillComponentComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

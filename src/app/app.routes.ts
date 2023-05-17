import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserComponent } from "./user/user.component";
import { SearchMovieComponent } from "./search-movie/search-movie.component";
import { DeveloperComponentComponent } from "./developer-component/developer-component.component";

export const ROUTES: Routes = [
  { path: "sign-up", component: SignUpComponent },
  { path: "user", component: UserComponent },
  { path: "search-movie", component: SearchMovieComponent},
  { path: "developer", component: DeveloperComponentComponent},
  { path: "", component: UserProfileComponent }
];

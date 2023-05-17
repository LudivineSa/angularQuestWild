import { Component } from "@angular/core";
import { User, user1 } from "./User";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent {
  user: User = user1;
  display: string = "inherit";
  showAge: string = "Masquer";
  click() {
    if (this.display === "inherit") {
      this.display = "none";
      this.showAge = "Afficher";
    } else {
      this.display = "inherit";
      this.showAge = "Masquer";
    }
  }
}

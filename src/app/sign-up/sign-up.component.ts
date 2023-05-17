import { Component } from "@angular/core";
import { User } from "./User";

@Component({
  selector: "sign-up-block",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent {
  model: User = new User("", "", "", "");

  onSubmit = (): void => {
    console.log(this.model);
  };
}

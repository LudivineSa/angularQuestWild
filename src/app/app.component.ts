import { Component, OnInit } from "@angular/core";
import { NasaService } from "./service/nasa.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  imgOfTheDay: any;

  constructor(public nasaService:  NasaService) {}

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe(imgInfo => this.imgOfTheDay = imgInfo)
  }
}

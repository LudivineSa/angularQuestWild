import { Component, OnInit } from '@angular/core';
import { NasaService } from '../service/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent {
  imgOfTheDay: any;

  constructor(public nasaService:  NasaService) {}

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe(imgInfo => this.imgOfTheDay = imgInfo)
  }
}

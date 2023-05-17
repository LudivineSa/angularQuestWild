import { Component } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.css']
})
export class KittenComponent {
  newKitten: Kitten = new Kitten("", "", null, "", false);
  kitten: Kitten[] = [];

  allAdopted: boolean = false;
  noneAdopted: boolean = true;

  areAllKittenAdopted(kitten: Kitten[]): boolean{
    return kitten.every(kitten => kitten.adopted);
  }

  areNoKittenAdopted(kitten : Kitten[]): boolean {
    return kitten.every(kitten => !kitten.adopted);
  }

  ngOnInit() {
    const kitten1 = new Kitten("Cacahuète", "Main coon", new Date('2018-01-01'), "data:image/jpeg;base64,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", false);
    const kitten2 = new Kitten("Moustache", "Européen", new Date('2018-02-02'), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm9H23bxKA0U3PExfbqP-0B1tNv7REHc6_Q&usqp=CAU", false);
    const kitten3 = new Kitten("Potatoes", "Somali", new Date('2018-03-03'), "https://decerrydwen.com/wp-content/uploads/2020/04/92460478_1347544288771234_5113948839870464_n.jpg", false);
    this.kitten.push(kitten1, kitten2, kitten3);
  }

  adoptCat(kitten: Kitten){
    kitten.adopted = true;
    this.allAdopted = this.areAllKittenAdopted(this.kitten)
    this.noneAdopted = this.areNoKittenAdopted(this.kitten)
  }

  onSubmit(){
    this.kitten.push(this.newKitten);
    this.allAdopted = this.areAllKittenAdopted(this.kitten)
    this.newKitten = new Kitten("", "", new Date(), "", false);
    this.noneAdopted = this.areNoKittenAdopted(this.kitten);
  }

  constructor(private datePipe: DatePipe) { }

}

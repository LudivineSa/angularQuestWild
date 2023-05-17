import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})

export class DeveloperComponentComponent {
  developer : Developer = new Developer('John', 'Doe', 35, 'Male', 'Un développeur lambda', [skill1, skill2])
}

const skill1 : Skill = {
  name: 'Angular',
  logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
  site: 'https://angular.io/'
}

const skill2 : Skill = {
  name: 'React',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  site: 'https://fr.reactjs.org/'
}


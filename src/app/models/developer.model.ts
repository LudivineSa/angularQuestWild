import { Skill } from './skill.model';

export class Developer {
  firstname: string
  lastname: string
  age: number
  gender: string
  bio: string
  skills: Skill[]

  constructor(firstname: string, lastname: string, age: number, gender: string, bio: string, skills: Skill[]){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.bio = bio;
    this.skills = skills;
  }
}

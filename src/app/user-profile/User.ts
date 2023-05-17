export class User {
  firstname: string;
  lastname: string;
  age: number;
  quote: string;
  src: string;

  constructor(
    firstname: string,
    lastname: string,
    age: number,
    quote: string,
    src: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.quote = quote;
    this.src = src;
  }
}

export const user1 = new User(
  "John",
  "Doe",
  32,
  `Mieux vaut un "tiens!" que deux "tu l'auras!"`,
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
);

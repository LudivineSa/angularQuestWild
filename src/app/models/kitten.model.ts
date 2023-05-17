export class Kitten {
  name: string;
  race: string;
  birthdate: Date | null;
  picture: string;
  adopted: boolean;

  constructor(name: string, race: string, birthdate: Date | null, picture: string, adopted: boolean) {
    this.name = name;
    this.race = race;
    this.birthdate = birthdate;
    this.picture = picture;
    this.adopted = adopted;
  }
}

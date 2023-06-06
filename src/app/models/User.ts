import { Address } from "./Adress.model";

export class User {
  constructor(
    public firstname: string,
    public email: string,
    public password: string,
    public address : Address
  ) {
    this.firstname = firstname;
    this.email = email;
    this.password = password;
    this.address = address;

  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/User';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subscrpition',
  templateUrl: './subscrpition.component.html',
  styleUrls: ['./subscrpition.component.css']
})
export class SubscrpitionComponent {

  constructor(private fb: FormBuilder) {}

  user = new User('', '', '', {street: '', city: '', postalCode: ''})

  username = new FormControl(this.user.firstname);
  password = new FormControl(this.user.password);
  email = new FormControl(this.user.email);
  address = new FormGroup({
    street: new FormControl(this.user.address?.street),
    city: new FormControl(this.user.address?.city),
    postalCode: new FormControl(this.user.address?.postalCode)
  })


  register () {
    const usernameValue = this.username.value;
    const passwordValue = this.password.value;
    const emailValue = this.email.value;
    const addressValue = this.address.value;

    this.user.firstname = usernameValue || '';
    this.user.password = passwordValue || '';
    this.user.email = emailValue || '';
    this.user.address.city = addressValue.city || '';
    this.user.address.postalCode = addressValue.postalCode || '';
    this.user.address.street = addressValue.street || '';
  }

  userForm = this.fb.group({
    credentials : this.fb.group({
      email: '',
      password: ''
    })
  })

  onSubmit() {
    console.log(this.userForm.value)
  }
}

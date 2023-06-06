import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl) : ValidationErrors | null {
  const email = control.value as string;
  if(email.split('').slice(-13).join('') === 'wilder.school') {
    return null
  } else {
    return {email: 'Email must end with wilder.school'}
  }
}

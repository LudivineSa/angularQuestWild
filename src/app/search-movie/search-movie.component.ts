import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent {

  constructor(private formbuilder: FormBuilder) {

  }

  searchMovieForm = this.formbuilder.group({
    identifier : this.formbuilder.group({
      title: [''],
      id: ['']
    }, {validator: this.isRequiredValidator('title', 'id')}),
  })


  isRequiredValidator(controlName1: any, controlName2: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value1 = control?.get(controlName1)?.value;
      const value2 = control?.get(controlName2)?.value;

      if (!value1 && !value2) {
        return { isRequired: true };
      }
      return null;
    };
  }

  onSubmit() {
    const movie = this.searchMovieForm.value;
    console.log(movie)
  }
}

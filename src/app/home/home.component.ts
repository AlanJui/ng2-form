import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {FormPoster} from '../services/form-poster.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ['English', 'Spanish', 'Others'];
  hasPrimaryLanguageError: boolean = false;
  // model = new Employee('Darla', 'Smith', true, 'w2', 'English');
  model = new Employee('', '', true, 'w2', 'default');
  // model = new Employee('', '', true, '', 'default');

  constructor(
    private formPoster: FormPoster
  ) {}

  submitForm(form: NgForm) {
    // Validate form data
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) {
      return;
    }

    // console.log(this.model);
    // console.log(form.value);
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log(`Success: `, data),
        err => console.log(`Error: err`, err)
      );
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  validatePrimaryLanguage(value) {
    if (value === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
  }
}

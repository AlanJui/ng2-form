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
  languages = [];
  hasPrimaryLanguageError: boolean = false;
  // startDate: Date;
  startDate: Date = new Date();
  minDate: Date = new Date('Oct 10 2016');
  startTime: Date = new Date('Oct 1 2016 9:00 AM');
  onOffSwitch: string = 'Off';
  familiarityLevel: number = 1;
  skillRating: number = 5;

  /**
   * Test Data
   */
  model = new Employee('Darla', 'Smith', true, 'w2', 'English');
  // model = new Employee('', '', true, 'w2', 'default');
  // model = new Employee('', '', true, '', 'default');

  constructor(
    private formPoster: FormPoster
  ) {
    this.formPoster.getLanguages()
      .subscribe(
        data => this.languages = data.languages,
        err => console.log('getLanguages() Error: ', err)
      );
  }

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

  ratingHover(value) {
    console.log(`hover: ${value}`);
  }

  ratingLeave(value) {
    console.log(`leave: ${value}`);
  }
}

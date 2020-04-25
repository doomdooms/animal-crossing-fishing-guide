import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ForSubmitService } from '../for-submit.service';
import { QueryData} from '../QueryData';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form;
  thisMonth: number = new Date().getMonth() + 1;
  months: { value: number, name: string}[] = [
    { value: 1, name: 'January'},
    { value: 2, name: 'February'},
    { value: 3, name: 'March'},
    { value: 4, name: 'April'},
    { value: 5, name: 'May'},
    { value: 6, name: 'June'},
    { value: 7, name: 'July'},
    { value: 8, name: 'August'},
    { value: 9, name: 'September'},
    { value: 10, name: 'October'},
    { value: 11, name: 'November'},
    { value: 12, name: 'December'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private submitService: ForSubmitService
  ) {
    this.form = this.formBuilder.group({
      selectedHemisphere: 'north',
      selectedMonth: this.thisMonth,
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    const sendData = {northSelected: formData.selectedHemisphere === 'north',
      monthSelected: formData.selectedMonth};
    const data = new QueryData(sendData.northSelected, sendData.monthSelected);
    this.submitService.sendData(data);
  }

}

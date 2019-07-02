import { Component, OnInit,Input } from '@angular/core';
import { ExchangeService } from "../service/exchange.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {
  convertForm:FormGroup;  
  Rates: any = [];
  output = false;
  inputValue;
  outputValue;
  inputCur = '';
  outputCur = '';
  @Input() text = '';
  constructor(public rest: ExchangeService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    // from builder
    this.convertForm = this.formBuilder.group({
      inputValue: ['', [Validators.required, Validators.minLength(1)]],
      inputCur: ['', Validators.required],
      outputCur: ['', Validators.required]
    });
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.convertForm.invalid) {
      alert('Enter All Values...!');
    }
    // making sure Rates array is empty
    this.Rates = [];
    // accessing service method
    this.rest.getRates().subscribe((data: {}) => {
      this.Rates = data['rates'];
      this.calculateRate();
    });

  }

  calculateRate() {
    // getting form values
    let values = this.convertForm.value;
    // setting values for output
    this.inputValue = values['inputValue'];
    this.inputCur = values['inputCur'];
    this.outputCur = values['outputCur'];

    // converting currency
    if (values['inputCur'] == 'USD') {
      this.outputValue = values['inputValue'] / this.Rates.USD;
      if (values['outputCur'] == 'CAD') {
        this.outputValue = this.outputValue * this.Rates.CAD;
      //  this.outputValue.toFixed(2);
      }
      this.output = true;
    }
    else if (values['inputCur'] == 'CAD') {
      this.outputValue = values['inputValue'] / this.Rates.CAD;
      if (values['inputCur'] == 'USD') {
        this.outputValue = this.outputValue * this.Rates.USD;
      }
      this.output = true;
    }
  }

}

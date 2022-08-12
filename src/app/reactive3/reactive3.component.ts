import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reactive3',
  templateUrl: './reactive3.component.html',
  styleUrls: ['./reactive3.component.css']
})
export class Reactive3Component implements OnInit {

  title : string = "Step 3";

  constructor( private data : DataService) { }

  ngOnInit(): void {
  }

  step3Form = new FormGroup({
    nickname: new FormControl( this.data.data['nickname'] ? this.data.data['nickname'] : ''),
    quote: new FormControl( this.data.data['quote'] ? this.data.data['quote'] : ''),
    marvelDc: new FormControl( this.data.data['marvelDc'] ? this.data.data['marvelDc'] : '', [Validators.required]),
    question: new FormControl( this.data.data['question'] ? this.data.data['question'] : '', [Validators.required, Validators.pattern('[a-zA-Z ]*'), this.customValidator]),
    luckyNum: new FormControl( this.data.data['luckyNum'] ? this.data.data['luckyNum'] : '', [Validators.pattern('[0-9]{0,1}$')]),
    email: new FormControl( this.data.data['email'] ? this.data.data['email'] : '', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

  customValidator(control: AbstractControl) {
    const value = control.value.toLowerCase().split(" ").join("");
    console.log(value);
    
    if ( value == "newdelhi" || value == "delhi") {
      return null;
    }
    return { invalid : true };
  }

  step3() {
    // console.log(this.step3Form.value, this.step3Form.valid);
    // const controls = this.step3Form.controls;
    // console.log(controls.nickname.valid);
    // console.log(controls.quote.valid);
    // console.log(controls.question.valid);
    // console.log(controls.marvelDc.valid);
    // console.log(controls.luckyNum.valid);
    // console.log(controls.email.valid);
    this.data.data['nickname'] = this.step3Form.value.nickname;
    this.data.data['quote'] = this.step3Form.value.quote;
    this.data.data['marvelDc'] = this.step3Form.value.marvelDc;
    this.data.data['question'] = this.step3Form.value.question;
    this.data.data['luckyNum'] = this.step3Form.value.luckyNum;
    this.data.data['email'] = this.step3Form.value.email;
    console.log(this.data.data);
    localStorage.setItem('step3', 'true');


  }

  get marvelDc() {
    return this.step3Form.get('marvelDc');
  }
  get question() {
    return this.step3Form.get('question');
  }
  get luckyNum() {
    return this.step3Form.get('luckyNum');
  }
  get email() {
    return this.step3Form.get('email');
  }

}

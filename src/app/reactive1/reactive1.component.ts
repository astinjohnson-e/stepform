import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reactive1',
  templateUrl: './reactive1.component.html',
  styleUrls: ['./reactive1.component.css']
})
export class Reactive1Component implements OnInit {

  title: string = "Step 1";

  constructor( private data : DataService) { }

  ngOnInit(): void {
  }

  step1Form = new FormGroup({
    firstname: new FormControl( this.data.data['firstname'] ? this.data.data['firstname'] : '', [Validators.required, Validators.pattern('[a-zA-Z.]*')],),
    middlename: new FormControl( this.data.data['middlename'] ? this.data.data['middlename'] : '', [Validators.pattern('[a-zA-Z]*')],),
    lastname: new FormControl( this.data.data['lastname'] ? this.data.data['lastname'] : '', [Validators.required, Validators.pattern('[a-zA-Z.]*')],),
    age: new FormControl( this.data.data['age'] ? this.data.data['age'] : '', [Validators.required, Validators.pattern('[0-9]{2,2}$')]),
    gender: new FormControl( this.data.data['gender'] ? this.data.data['gender'] : '', [Validators.required]),
    nation: new FormControl( this.data.data['nation'] ? this.data.data['nation'] : ''),
    marital: new FormControl( this.data.data['marital'] ? this.data.data['marital'] : ''),
  });


  step1() {
    // console.log(this.step1Form.value, this.step1Form.valid);
    // const controls = this.step1Form.controls;
    // console.log(controls.age.valid);
    // console.log(controls.firstname.valid);
    // console.log(controls.gender.valid);
    // console.log(controls.lastname.valid);
    // console.log(controls.marital.valid);
    // console.log(controls.middlename.valid);
    // console.log(controls.nation.valid);
    this.data.data['firstname'] = this.step1Form.value.firstname;
    this.data.data['middlename'] = this.step1Form.value.middlename;
    this.data.data['lastname'] = this.step1Form.value.lastname;
    this.data.data['age'] = this.step1Form.value.age;
    this.data.data['gender'] = this.step1Form.value.gender;
    this.data.data['nation'] = this.step1Form.value.nation;
    this.data.data['marital'] = this.step1Form.value.marital;
    console.log(this.data.data);
    localStorage.setItem('step1', 'true');
  }

  get firstname() {
    return this.step1Form.get('firstname');
  }
  get middlename() {
    return this.step1Form.get('middlename');
  }
  get lastname() {
    return this.step1Form.get('lastname');
  }
  get age() {
    return this.step1Form.get('age');
  }
  get gender() {
    return this.step1Form.get('gender');
  }
}

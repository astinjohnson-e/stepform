import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css']
})
export class Reactive2Component implements OnInit {

  title: string = "Step 2";

  languages: Array<any> = [
    { name: 'Tamil', value: 'Tamil' },
    { name: 'English', value: 'English' },
    { name: 'Hindi', value: 'Hindi' }
  ];

  constructor( private data : DataService ) { }

  ngOnInit(): void {
  }

  step2Form = new FormGroup({
    aadhaar: new FormControl( this.data.data['aadhaar'] ? this.data.data['aadhaar'] : '', [Validators.required, Validators.pattern('[0-9]{1,12}$')],),
    urself: new FormControl( this.data.data['urself'] ? this.data.data['urself'] : '', [Validators.required]),
    dark: new FormControl( this.data.data['dark'] ? this.data.data['dark'] : ''),
    hobby: new FormControl( this.data.data['hobby'] ? this.data.data['hobby'] : ''),
    language0 : new FormControl( this.data.data['Tamil'] ? this.data.data['Tamil'] : false ),
    language1 : new FormControl( this.data.data['English'] ? this.data.data['English'] : false ),
    language2 : new FormControl( this.data.data['Hindi'] ? this.data.data['Hindi'] : false )
  });

  step2() {
    // console.log(this.step2Form.value, this.step2Form.valid);
    this.data.data['aadhaar'] = this.step2Form.value.aadhaar;
    this.data.data['urself'] = this.step2Form.value.urself;
    this.data.data['dark'] = this.step2Form.value.dark;
    this.data.data['hobby'] = this.step2Form.value.hobby;
    this.data.data['Tamil'] = this.step2Form.value.language0 ? 'Tamil' : '';
    this.data.data['English'] = this.step2Form.value.language1 ? 'English' : '';
    this.data.data['Hindi'] = this.step2Form.value.language2 ? 'Hindi' : '';
    console.log(this.data.data);
    localStorage.setItem('step2', 'true');

  }

  get aadhaar() {
    return this.step2Form.get('aadhaar');
  }
  get urself() {
    return this.step2Form.get('urself');
  }
  get language() {
    return this.step2Form.get('language');
  }

}


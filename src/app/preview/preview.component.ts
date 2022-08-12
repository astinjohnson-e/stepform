import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  title : string = "Preview";

  constructor( protected data : DataService ) { }

  ngOnInit(): void {
  }
  

}

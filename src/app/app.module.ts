import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reactive1Component } from './reactive1/reactive1.component';
import { Reactive2Component } from './reactive2/reactive2.component';
import { Reactive3Component } from './reactive3/reactive3.component';
import { PreviewComponent } from './preview/preview.component';

import { BrowserAnimationsModule } from  '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    Reactive1Component,
    Reactive2Component,
    Reactive3Component,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

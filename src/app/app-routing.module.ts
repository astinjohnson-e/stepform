import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewGuard } from './preview.guard';
import { PreviewComponent } from './preview/preview.component';
import { Reactive1Component } from './reactive1/reactive1.component';
import { Reactive2Component } from './reactive2/reactive2.component';
import { Reactive3Component } from './reactive3/reactive3.component';
import { Step2Guard } from './step2.guard';
import { Step3Guard } from './step3.guard';

const routes: Routes = [
  { path: "step1", component: Reactive1Component },
  { path: "step2", component: Reactive2Component, canActivate : [ Step2Guard ] },
  { path: "step3", component: Reactive3Component, canActivate : [ Step3Guard ] },
  { path: "preview", component: PreviewComponent, canActivate : [ PreviewGuard ] },
  { path: "", component: Reactive1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

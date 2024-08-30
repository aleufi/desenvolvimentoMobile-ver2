import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child2Component } from '../components/child2.component';
import { Module1Component } from '../components/module1.component';

const routes: Routes = [
  { path: '', component: Module1Component},
  { path: 'child2', component: Child2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child2RoutingModule { }

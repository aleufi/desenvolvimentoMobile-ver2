import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from '../components/child1.component';
import { Module1Component } from '../components/module1.component';

const routes: Routes = [
  { path: '', component: Module1Component},
  { path: 'child1', component: Child1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child1RoutingModule { }

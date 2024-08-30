import { NgModule } from '@angular/core';
import { Child1RoutingModule } from './child1-rounting.module';
import { Child1Component } from '../components/child1.component';
import { Child2Component } from '../components/child2.component';
import { Child2RoutingModule } from './child2-routing.module';

@NgModule({
  declarations: [Child1Component, Child2Component],
  imports: [
    Child1RoutingModule,
    Child2RoutingModule
  ]
})
export class ChildModule { }

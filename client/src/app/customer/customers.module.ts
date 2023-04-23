import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/customer.reducers";



@NgModule({
  declarations: [],
  imports: [
    CommonModule, StoreModule.forFeature('customer',reducers)
  ]
})
export class CustomersModule { }

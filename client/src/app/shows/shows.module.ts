import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/show.reducers";
import { ShowsComponent } from './components/shows/shows.component';



@NgModule({
  declarations: [
    ShowsComponent
  ],
  exports: [
    ShowsComponent
  ],
  imports: [
    CommonModule, StoreModule.forFeature('shows', reducers)
  ]
})
export class ShowsModule { }

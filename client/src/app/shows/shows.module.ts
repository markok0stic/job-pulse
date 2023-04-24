import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/show.reducers";
import { ShowsComponent } from './components/shows/shows.component';
import {EffectsModule} from "@ngrx/effects";
import {ShowEffects} from "./store/show.effects";
import {ShowsService} from "./services/shows.service";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ShowsComponent
  }
]

@NgModule({
  declarations: [
    ShowsComponent
  ],
  exports: [
    ShowsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('shows', reducers),
    EffectsModule.forFeature([ShowEffects]),
    RouterModule.forChild(routes)
  ],
  providers: [
    ShowsService
  ]
})
export class ShowsModule { }

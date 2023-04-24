import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShowsComponent} from "../shows/components/shows/shows.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

const routes: Routes = [
  /*{
    path: '',
    component: NavbarComponent
  }*/
]

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
   /* StoreModule.forFeature('header', reducers),
    EffectsModule.forFeature([ShowEffects]),*/
    RouterModule.forChild(routes)
  ]
})
export class NavbarModule { }

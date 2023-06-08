import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import {reducers} from "./store/user.reducers";
import {RouterModule, Routes} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/user.effects";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "../shared/components/login/login.component";
import {RegisterComponent} from "../shared/components/register/register.component";
import {SharedModule} from "../shared/shared.module";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }

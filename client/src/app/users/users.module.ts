import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import {reducers} from "./store/user.reducers";
import {RouterModule, Routes} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/user.effects";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component';


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
    LoginComponent,
    RegisterComponent,
    ProfileDropdownComponent
  ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ProfileDropdownComponent,
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeComponent } from './components/escape/escape.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileDropdownComponent} from "./components/profile-dropdown/profile-dropdown.component";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/shared.reducers";
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';


@NgModule({
  declarations: [
    EscapeComponent,
    OverlayComponent,
    PaginationComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProfileDropdownComponent,
    SubNavigationComponent
  ],
  exports: [
    OverlayComponent,
    EscapeComponent,
    NotFoundComponent,
    PaginationComponent,
    LoginComponent,
    RegisterComponent,
    ProfileDropdownComponent,
    SubNavigationComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('shared', reducers)
  ],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { LayoutComponent } from './components/layout/layout.component';
import {ProjectsModule} from "../projects/projects.module";
import {ReviewsModule} from "../reviews/reviews.module";
import {UsersModule} from "../users/users.module";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/market.reducers";
import { OverlayComponent } from './components/overlay/overlay.component';
import {ContainerComponent} from "../projects/components/main-container/container.component";
import { PaginationComponent } from './components/pagination/pagination.component';

const routes: Routes = [
  { path: '**', redirectTo: '/not-found' },
  { path: '', component: ContainerComponent}
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    OverlayComponent,
    PaginationComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProjectsModule,
    ReviewsModule,
    UsersModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('market', reducers)
  ]
})
export class CoreModule { }

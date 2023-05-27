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

const routes: Routes = [
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
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
    RouterModule.forChild(routes)
  ]
})
export class MarketModule { }

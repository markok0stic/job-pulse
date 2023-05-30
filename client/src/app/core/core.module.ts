import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {LayoutComponent} from './components/layout/layout.component';
import {ProjectsModule} from "../projects/projects.module";
import {UsersModule} from "../users/users.module";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/core.reducers";
import {OverlayComponent} from './components/overlay/overlay.component';
import {ContainerComponent} from "../projects/components/main-container/container.component";
import {PaginationComponent} from './components/pagination/pagination.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'},
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    OverlayComponent,
    PaginationComponent,
    NotFoundComponent
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
    UsersModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('market', reducers)
  ]
})
export class CoreModule {
}

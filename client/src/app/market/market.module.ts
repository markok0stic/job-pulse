import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {LayoutComponent} from './components/layout/layout.component';
import {ProjectsModule} from "../projects/projects.module";
import {ContainerComponent} from "../projects/components/main-container/container.component";
import {NotFoundComponent} from "../shared/components/not-found/not-found.component";
import {SharedModule} from "../shared/shared.module";

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
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class MarketModule {
}

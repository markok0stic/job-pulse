import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {FiltersComponent} from './components/filters/filters.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ListComponent} from './components/list/list.component';
import {HeaderComponent} from './components/header/header.component';
import {ContainerComponent} from './components/container/container.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailsComponent} from './components/details/details.component';
import {FormComponent} from './components/form/form.component';
import {BidComponent} from './components/bid/bid.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    SearchComponent,
    FiltersComponent,
    SidebarComponent,
    ListComponent,
    HeaderComponent,
    ContainerComponent,
    DetailsComponent,
    FormComponent,
    BidComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule {
}

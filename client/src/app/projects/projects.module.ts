import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {FiltersComponent} from './components/filters/filters.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ListComponent} from './components/list/list.component';
import {ContainerComponent} from './components/container/container.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailsComponent} from './components/details/details.component';
import {FormComponent} from './components/form/form.component';
import {BidComponent} from './components/bid/bid.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SortComponent } from './components/sort/sort.component';
import { ActiveFiltersComponent } from './components/active-filters/active-filters.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/projects.reducers";
import {EffectsModule} from "@ngrx/effects";
import {ProjectsEffects} from "./store/projects.effects";


@NgModule({
  declarations: [
    SearchComponent,
    FiltersComponent,
    SidebarComponent,
    ListComponent,
    ContainerComponent,
    DetailsComponent,
    FormComponent,
    BidComponent,
    DashboardComponent,
    ListItemComponent,
    SortComponent,
    ActiveFiltersComponent,
    ListHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('projects', reducers),
    EffectsModule.forFeature([ProjectsEffects]),
  ]
})
export class ProjectsModule {
}

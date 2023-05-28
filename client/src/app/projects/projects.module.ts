import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { ProjectsContainerComponent } from './components/projects-container/projects-container.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SearchComponent,
    FiltersComponent,
    SidebarComponent,
    ProjectsListComponent,
    ProjectHeaderComponent,
    ProjectsContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }

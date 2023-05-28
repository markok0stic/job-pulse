import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  filter1: boolean = false;
  filter2: boolean = false;
  filter3: boolean = false;
}

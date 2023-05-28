import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  location: string = '';

  searchJobs() {
    // Perform job search functionality here
    // You can access the search term, location, and filters in this function
  }
}

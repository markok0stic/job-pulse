import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent {
  isDropdownOpen: boolean = false;
  profilePictureUrl: string = 'path/to/profile-picture.png';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    // Perform logout functionality here
    // e.g., clearing session, navigating to login page, etc.
  }
}

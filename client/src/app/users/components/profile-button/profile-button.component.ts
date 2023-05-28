import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent {
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

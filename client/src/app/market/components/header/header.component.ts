import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../users/types/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user: User | null = null;
  showLogin: boolean = false;
  ngOnInit(): void {
  }

}

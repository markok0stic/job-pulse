import {Component, Input} from '@angular/core';
import {User} from "../../../users/types/user";

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.css']
})
export class SubNavigationComponent {
  @Input() user: User | null = null;

}

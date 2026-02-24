import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation-component/navigation-component';
import { HeaderAccountComponent } from '../../account/header-account-component/header-account-component';

@Component({
  selector: 'app-toolbar-component',
  imports: [
    NavigationComponent,
    HeaderAccountComponent
  ],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.scss',
})
export class ToolbarComponent {

}

import { Component } from '@angular/core';
import { ExpoComponent } from '../expo-component/expo-component';

@Component({
  selector: 'app-home-component',
  imports: [
    ExpoComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

}

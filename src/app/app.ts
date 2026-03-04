import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/header/toolbar-component/toolbar-component';
import { FooterComponent } from './components/footer/footer-component/footer-component';
import { RouteFadeAnimation } from './animations/route-animation';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToolbarComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    RouteFadeAnimation
  ]
})
export class App {
  protected readonly title = signal('kt-web');

  constructor () {}

  public prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}

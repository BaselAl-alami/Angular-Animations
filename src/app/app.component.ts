import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition } from '@angular/animations';

import { slideAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routerAnimations', [transition('* => *', slideAnimation)]),
  ],
})
export class AppComponent {
  title = 'angular-animations';

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};

    return animation['value'] || null;
  }
}

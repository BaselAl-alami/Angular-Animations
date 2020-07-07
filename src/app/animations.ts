import { animate, animation, style } from '@angular/animations';

export var fadeAnimation = animation([
  style({
    opacity: '0',
  }),
  animate(
    '800ms 300ms ease-in-out',
    style({
      opacity: '1',
    })
  ),
]);

export var slideAnimation = animation([

  style({ opacity: 0, position: 'absolute', left: 0, right: 0, transform: 'translate3d(100%,0,0)' }),

  animate('400ms ease-in-out', style({ opacity: 1, transform: 'translate3d(0%,0,0)' })),

])
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const baseAnimations = [
  trigger('fadeIn', [
    state(
      'void',
      style({
        opacity: 0,
      })
    ),
    transition(':enter', [
      animate(
        '0.4s ease-in',
        style({
          opacity: 1,
        })
      ),
    ]),
  ]),
];

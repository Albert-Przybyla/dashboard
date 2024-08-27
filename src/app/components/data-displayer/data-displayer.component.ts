import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  trigger,
  transition,
  query,
  animateChild,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-data-displayer',
  standalone: true,
  imports: [],
  templateUrl: './data-displayer.component.html',
  styleUrl: './data-displayer.component.scss',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        query(':leave', animateChild(), { optional: true }),
        animate('150ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        query(':enter', animateChild(), { optional: true }),
        animate('250ms 250ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class DataDisplayerComponent {
  @Input() loading: boolean = false;
  @Output() pageChange = new EventEmitter<number>();
}

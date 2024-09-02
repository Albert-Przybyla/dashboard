import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-loyalty',
  standalone: true,
  imports: [CurrencyPipe, ProgressBarComponent],
  templateUrl: './loyalty.component.html',
  styleUrl: './loyalty.component.scss',
})
export class LoyaltyComponent {
  protected copy() {}
}

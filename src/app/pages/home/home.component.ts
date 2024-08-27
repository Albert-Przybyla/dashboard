import { Component } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrdersComponent, ProgressBarComponent, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected copy() {}
}

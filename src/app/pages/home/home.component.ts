import { Component } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrdersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

import { Component } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { CurrencyPipe } from '@angular/common';
import { AnnouncementsComponent } from './announcements/announcements.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    OrdersComponent,
    ProgressBarComponent,
    CurrencyPipe,
    AnnouncementsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected copy() {}
}

import { Component, inject } from '@angular/core';
import { DataDisplayerComponent } from '../../../components/data-displayer/data-displayer.component';
import { Order } from '../../../models/order.model';
import { TmpDataService } from '../../../services/tmp-data.service';
import { CommonModule, DatePipe } from '@angular/common';
import { BaseDataComponent } from '../../../base/baseDataComponent';
import { Observable } from 'rxjs';
import { status } from '../../../enums/status.enum';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DataDisplayerComponent, DatePipe, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent extends BaseDataComponent<Order> {
  private _tmpDataService = inject(TmpDataService);

  protected stauses = status;

  protected getValues(page: number): Observable<any> {
    return this._tmpDataService.getOrders(page);
  }

  getStatusColor(s: status): string {
    switch (s) {
      case status.Expired: {
        return 'badge-danger';
      }
      case status.Waiting: {
        return 'badge-warning';
      }
      case status.Active: {
        return 'badge-next';
      }
    }
  }
}

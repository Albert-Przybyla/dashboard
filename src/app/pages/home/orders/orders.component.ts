import { Component, inject } from '@angular/core';
import { DataDisplayerComponent } from '../../../components/data-displayer/data-displayer.component';
import { Order } from '../../../models/order.model';
import { TmpDataService } from '../../../services/tmp-data.service';
import { DatePipe } from '@angular/common';
import { BaseDataComponent } from '../../../base/baseDataComponent';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DataDisplayerComponent, DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent extends BaseDataComponent<Order> {
  private _tmpDataService = inject(TmpDataService);

  protected getValues(page: number): Observable<any> {
    return this._tmpDataService.getOrders(page);
  }
}

import { Injectable } from '@angular/core';
import { PageResponse } from '../models/pageResponse.model';
import { Announcement } from '../models/announcement.model';
import { delay, Observable, of } from 'rxjs';
import { PAGE_SIZE } from '../../../constants';
import { Order } from '../models/order.model';
import { status } from '../enums/status.enum';

@Injectable({
  providedIn: 'root',
})
export class TmpDataService {
  private announcements: Announcement[] = [
    {
      id: 1,
      title: 'TheDuke',
      subTitle: 'On general',
      date: new Date(),
      icon: 'img/announcement.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'TheDuke',
      subTitle: 'On general',
      date: new Date(),
      icon: 'img/announcement.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'TheDuke',
      subTitle: 'On general',
      date: new Date(),
      icon: 'img/announcement.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  private orders: Order[] = [
    {
      id: 'AP1234',
      product: 'Static proxies',
      date: new Date(),
      quantity: 4,
      status: status.Waiting,
      Total: 33,
    },
    {
      id: 'AP1235',
      product: 'Residential proxies',
      date: new Date(),
      quantity: 6,
      status: status.Active,
      Total: 33,
    },
    {
      id: 'AP1236',
      product: 'hybrid proxies',
      date: new Date(),
      quantity: 4,
      status: status.Expired,
      Total: 33,
    },
    {
      id: 'AP1237',
      product: 'hybrid proxies',
      date: new Date(),
      quantity: 12,
      status: status.Active,
      Total: 33,
    },
    {
      id: 'AP1238',
      product: 'Static proxies',
      date: new Date(),
      quantity: 4,
      status: status.Waiting,
      Total: 33,
    },
    {
      id: 'AP1234',
      product: 'Static proxies',
      date: new Date(),
      quantity: 4,
      status: status.Waiting,
      Total: 33,
    },
  ];

  public getAnnouncements(
    pageNumber: number,
    pageSize: number = PAGE_SIZE
  ): Observable<PageResponse<Announcement>> {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return of({
      content: this.announcements.slice(startIndex, endIndex),
      currentPage: pageNumber,
      totalPages: Math.ceil(this.announcements.length / pageSize),
    }).pipe(delay(1000));
  }

  public getOrders(
    pageNumber: number,
    pageSize: number = PAGE_SIZE
  ): Observable<PageResponse<Order>> {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return of({
      content: this.orders.slice(startIndex, endIndex),
      currentPage: pageNumber,
      totalPages: Math.ceil(this.announcements.length / pageSize),
    }).pipe(delay(1500));
  }

  constructor() {}
}

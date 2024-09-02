import { Component, inject } from '@angular/core';
import { BaseDataComponent } from '../../../base/baseDataComponent';
import { Announcement } from '../../../models/announcement.model';
import { TmpDataService } from '../../../services/tmp-data.service';
import { Observable } from 'rxjs';
import {
  trigger,
  transition,
  query,
  animateChild,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss',
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
export class AnnouncementsComponent extends BaseDataComponent<Announcement> {
  private _tmpDataService = inject(TmpDataService);

  protected readmore: boolean = false;

  protected getValues(page: number): Observable<any> {
    return this._tmpDataService.getAnnouncements(page);
  }
}

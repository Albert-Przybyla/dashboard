import { Component, inject } from '@angular/core';
import { BaseDataComponent } from '../../../base/baseDataComponent';
import { Announcement } from '../../../models/announcement.model';
import { TmpDataService } from '../../../services/tmp-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss',
})
export class AnnouncementsComponent extends BaseDataComponent<Announcement> {
  private _tmpDataService = inject(TmpDataService);

  protected getValues(page: number): Observable<any> {
    return this._tmpDataService.getAnnouncements(page);
  }
}

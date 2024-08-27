import { AfterViewInit, inject, Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PAGE_SIZE } from '../../../constants';
import { Observable } from 'rxjs';
import { PageResponse } from '../models/pageResponse.model';

@Component({ template: '' })
export abstract class BaseDataComponent<T> implements OnInit {
  protected _router = inject(Router);

  protected loading: boolean = true;
  protected pageSize: number = PAGE_SIZE;

  protected items: T[] = [];
  protected currentPage: number = 1;
  protected maxPage: number = 1;

  protected abstract getValues(page: number): Observable<PageResponse<T>>;

  ngOnInit(): void {
    this.getData(1);
  }

  protected getData(page: number) {
    this.getValues(page).subscribe({
      next: (data) => {
        this.items = data.content;
        this.currentPage = data.currentPage;
        this.maxPage = data.totalPages;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}

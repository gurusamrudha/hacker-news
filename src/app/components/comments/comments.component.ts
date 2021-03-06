import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of, Subject } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

import { GroupingUtilService } from 'src/app/services/grouping-util.service';
import { NewsUtilService } from 'src/app/services/news-util.service';
import { Item } from '../../models/items';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  paginationIndex = 0;

  commentIds$: Observable<number[]>;
  currentPageIds$: Observable<number[]>;

  constructor(private route: ActivatedRoute, private newsUtil: NewsUtilService, private groupingUtil: GroupingUtilService) { }

  ngOnInit(): void {
    // Get an Parent Item ID from the URL
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      if (param && param.id) {
        const id = param.id;
        this.commentIds$ = this.newsUtil.getNewsItem(id).pipe(
          map((item: Item) => {
            return item.kids;
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return of([]);
          }));

        this.updateCommentsOfParent();
      }
    });
  }

  // Unsubscribe all the subscriptions here :)
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  // Updates the Current Page ID.
  updateCommentsOfParent(): void {
    this.currentPageIds$ = this.commentIds$.pipe(map((ids: number[]) => {
      return this.groupingUtil.groupIds(ids, this.paginationIndex);
    }));
  }

  // When PageIndex changes this function will update the currentIds
  getPageEvents($event: {previousPageIndex: number, pageIndex: number, pageSize: number, length: number}): void {
    this.paginationIndex = $event.pageIndex;
    this.updateCommentsOfParent();
  }

}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { NewsUtilService } from 'src/app/services/news-util.service';
import { GroupingUtilService } from 'src/app/services/grouping-util.service';

@Component({
  selector: 'app-homepage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],

})
export class HomepageComponent implements OnInit {
  paginationIndex = 0;

  storyIds$: Observable<number[]>;
  currentPageIds$: Observable<number[]>;
  // We use this to get the available viewPort of the screen.
  isSmallViewport$ = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(map(state => state.matches));

  constructor(
    private newsUtil: NewsUtilService,
    private groupingUtil: GroupingUtilService,
    private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.storyIds$ = this.newsUtil.getIdsOfTopStories();
    this.updateCurrentPageIds();
  }

  // Updates the current page Ids
  updateCurrentPageIds(): void {
    this.currentPageIds$ = this.storyIds$.pipe(map(ids => {
      return this.groupingUtil.groupIds(ids, this.paginationIndex);
    }));
  }

  getPageEvents($event: {previousPageIndex: number, pageIndex: number, pageSize: number, length: number}): void {
    this.paginationIndex = $event.pageIndex;
    this.updateCurrentPageIds();
  }
}

import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  /**
   * The length of the total number of items that are being paginated.
   */
  @Input()
  length = 100;

  @Output()
  pageEvents = new EventEmitter<{previousPageIndex: number, pageIndex: number, pageSize: number, length: number}>();

  @ViewChild(MatPaginator)
  pagination: MatPaginator;

  getAllEvents($event: {previousPageIndex: number, pageIndex: number, pageSize: number, length: number}): void {
    this.pageEvents.emit($event);
  }

}

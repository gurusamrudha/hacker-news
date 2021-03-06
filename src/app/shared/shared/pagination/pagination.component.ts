import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  getAllEvents($event: {previousPageIndex: number, pageIndex: number, pageSize: number, length: number}): void {
    this.pageEvents.emit($event);
  }

}

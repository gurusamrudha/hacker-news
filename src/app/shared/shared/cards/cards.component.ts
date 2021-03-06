import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from 'src/app/models/items';
import { NewsUtilService } from 'src/app/services/news-util.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  items$: Observable<Item[]>;

  @Input()
  set currentPageIds(ids: number[]) {
    this.items$ = this.newsUtil.loadCurrentPageItems(ids);
  }

  constructor(private newsUtil: NewsUtilService) { }

}

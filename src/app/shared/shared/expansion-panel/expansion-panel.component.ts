import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsUtilService } from 'src/app/services/news-util.service';
import { Item } from '../../../models/items';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent {
  items$: Observable<Item[]>;

  @Input()
  set currentPageIds(ids: number[]) {
    this.items$ = this.newsUtil.loadCurrentPageItems(ids);
  }

  @Input()
  isScreenSmall: boolean;

  constructor(private newsUtil: NewsUtilService) {}

}

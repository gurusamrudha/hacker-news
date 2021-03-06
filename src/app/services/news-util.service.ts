import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { forkJoin, Observable, of } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';

import { Item } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class NewsUtilService {

  private get apiUrl(): string {
    return 'https://hacker-news.firebaseio.com/v0/';
  }

  constructor(private http: HttpClient) {}

  getIdsOfTopStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}topstories.json?print=pretty`)
    .pipe(catchError(error => {
      console.log(this.getErrorMessageForResponse(error));
      return of(error);
    }));
  }

  getNewsItem(itemId: number): Observable<Item> {
    const item: Item = {};
    return itemId ? this.http.get<Item>(`${this.apiUrl}item/${itemId}.json?print=pretty`) : of(item);
  }

  // ===============================================
  // Need to avoid these kind of coding as if any Observable fails at any point,
  // forkJoin will ERROR as well and observables will be immidiatlt unsubscribed.
  // ===============================================
  /**
   * As we dont have an single API call to get group of data and these HTTP calls are not
   * synchronous we use forkJoin to fetch group of data at once.
   * @param ids takes an array of item Ids
   * @returns an Observable of Items Array if all http calls successed else returns an error on catchError
   */
  loadCurrentPageItems(ids: number[]): Observable<Item[]> {
    if (ids) {
        return forkJoin([
          this.getNewsItem(ids[0]),
          this.getNewsItem(ids[1]),
          this.getNewsItem(ids[2]),
          this.getNewsItem(ids[3]),
          this.getNewsItem(ids[4]),
          this.getNewsItem(ids[5]),
          this.getNewsItem(ids[6]),
          this.getNewsItem(ids[7]),
          this.getNewsItem(ids[8]),
          this.getNewsItem(ids[9]),
      ]).pipe(
        concatMap(([item1, item2, item3, item4, item5, item6, item7, item8, item9, item10]) => {
          const items: Item[] = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];
          return of(items);

        }),
        catchError(error => {
          console.log(this.getErrorMessageForResponse(error));
          return of(error);
        })
      );

    }
  }

  private getErrorMessageForResponse(response: Response): string {
    switch (response.status) {
      case 503:
        return 'temporarily unavailable';
      case 502:
        return 'bad gateway';
      case 500:
        return 'internal server error';
      case 404:
        return 'not found';
      case 0:
        return 'CORS header not present';
      default:
        return `unexpected error code ${response.status}`;
    }
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupingUtilService {
  ids = [];

  /**
   * As we are loading more than 500 Ids at once we need to group Ids as Object of 10 in each group. This function groups Object of 10 id's.
   * @param allIds: This contains all the ids of stories or comments.
   * @param paginationIndex: Contains the page number of the pagination.
   * @returns: A group of array Objects with 10 ids in each.
   */

  groupIds(allIds: number[], paginationIndex: number): number[] {
    let temp = [];
    this.ids = [];
    if (allIds) {
      for (let i = 1; i < allIds.length; i++) {
        if (i % 10 !== 0) {
          temp.push(allIds[i - 1]);
        } else {
          temp.push(allIds[i - 1]);
          this.ids.push(temp);
          temp = [];
        }
      }
    }
    this.ids.push(temp ? temp : undefined);
    return this.ids[paginationIndex];
  }


}

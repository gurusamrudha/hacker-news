import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewsUtilService } from './news-util.service';

const Ids: number[] = [ 111, 222, 333 ];
const apiUrl = 'https://hacker-news.firebaseio.com/v0/';

describe('NewsUtilService', () => {
  let service: NewsUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsUtilService]
    });
    service = TestBed.inject(NewsUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Story Ids', inject([NewsUtilService, HttpTestingController], (
    newsUtil: NewsUtilService,
    httpMockController: HttpTestingController,
  ) => {
    newsUtil.getIdsOfTopStories().subscribe(ids => {
      expect(ids).toEqual(Ids);
    });

    const httpRequest = httpMockController.expectOne(`${apiUrl}topstories.json?print=pretty`);
    expect(httpRequest.cancelled).toBeFalsy();
    expect(httpRequest.request.responseType).toEqual('json');
  }));

});

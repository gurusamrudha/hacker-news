import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
      imports: [MatPaginatorModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits events from the angular material Paginator', () => {
    component.length = 1;
    fixture.detectChanges();

    spyOn(component.pageEvents, 'emit');
    component.pagination.page.emit({previousPageIndex: 0, pageIndex: 1, pageSize: 1, length: 1});
    expect(component.pageEvents.emit).toHaveBeenCalledWith({previousPageIndex: 0, pageIndex: 1, pageSize: 1, length: 1});
  });

});

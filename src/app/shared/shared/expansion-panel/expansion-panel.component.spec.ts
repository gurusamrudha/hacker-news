import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Item, ItemType } from 'src/app/models/items';

import { ExpansionPanelComponent } from './expansion-panel.component';

const mockItem: Observable<Item[]> = of([{
  id: 111,
  type: ItemType.Story,
  by: 'Guru',
  time: new Date(1175714200),
  text: 'I really hate writting Mock data :P',
  dead: false,
  kids: [ 111111, 222222, 333333 ],
  url: 'https://google.com',
  score: 20,
  title: 'Data of Mr. Interesting!!',
  descendants: 20,
}]);

const mockItem2: Observable<Item[]> = of([{
  id: 111,
  type: ItemType.Story,
  by: 'Guru',
  time: new Date(1175714200),
  text: 'I really hate writting Mock data :P',
  dead: false,
  kids: [ 111111, 222222, 333333 ],
  url: 'https://google.com',
  score: 20,
  title: 'Data of Mr. Interesting!!',
  descendants: 20,
},
{
  id: 222,
  type: ItemType.Story,
  by: 'Guru',
  time: new Date(1175714200),
  text: 'I really hate writting Mock data :P',
  dead: false,
  kids: [ 111111, 222222, 333333 ],
  url: 'https://google.com',
  score: 20,
  title: 'Data of Mr. Interesting!!',
  descendants: 20,
},

]);

describe('ExpansionPanelComponent', () => {
  let component: ExpansionPanelComponent;
  let fixture: ComponentFixture<ExpansionPanelComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelComponent ],
      imports: [HttpClientTestingModule, MatCardModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelComponent);
    component = fixture.componentInstance;
    component.items$ = mockItem;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Item score', () => {
    const title = el.query(By.css('.item-score')).nativeElement as HTMLElement;
    expect(title.textContent.trim()).toEqual('20');
  });

  it('should show Item title', () => {
    const title = el.query(By.css('mat-panel-title span')).nativeElement as HTMLElement;
    expect(title.textContent.trim()).toContain('Data of Mr. Interesting!!');
  });

  it('should show Item author name', () => {
    const title = el.query(By.css('mat-panel-description strong')).nativeElement as HTMLElement;
    expect(title.textContent.trim()).toEqual('Guru');
  });

  it('should hide progess bar', () => {
      expect(el.query(By.css('mat-progress-bar'))).toBeNull();
    });

  it('should have 2 card views', () => {
    component.items$ = mockItem2;
    fixture.detectChanges();

    expect(el.queryAll(By.css('.example-headers-align')).length).toBe(2);
  });

  it('should show comment icon', () => {
    component.isScreenSmall = false;
    fixture.detectChanges();

    expect(el.query(By.css('#icon-badge'))).toBeTruthy();
  });
});


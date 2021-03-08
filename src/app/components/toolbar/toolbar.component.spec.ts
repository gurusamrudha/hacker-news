import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Title `Hacker News`', () => {
    const title = el.query(By.css('.navbar-brand')).nativeElement as HTMLElement;
    expect(title.textContent.trim()).toEqual('Hacker News');
  });

  it('should have active link `New`', () => {
    const title = el.query(By.css('.nav-link:nth-child(1)')).nativeElement as HTMLElement;
    expect(title.textContent.trim()).toEqual('New');
  });

  it('should have link name as contact', () => {
    const title = el.query(By.css('#contact-details')).nativeElement as HTMLElement;
    expect(title.textContent.trim()).toEqual('Contact');
  });


});

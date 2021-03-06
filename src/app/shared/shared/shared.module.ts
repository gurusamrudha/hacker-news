import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

import { CardsComponent } from './cards/cards.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { NewsUtilService } from 'src/app/services/news-util.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

const sharedFiles = [
  CardsComponent,
  ExpansionPanelComponent
];

const MaterialModules = [
  MatButtonModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatCardModule
];

@NgModule({
  declarations: [sharedFiles],
  imports: [MaterialModules, BrowserModule, AppRoutingModule],
  providers: [NewsUtilService],
  exports: [sharedFiles, MaterialModules]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// All Service files and Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared/shared.module';
import { NewsUtilService } from './services/news-util.service';

// All Components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PaginationComponent } from './shared/shared/pagination/pagination.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PaginationComponent,
    HomepageComponent,
    CommentsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // All Angular material shared and reusable components are present here.
    SharedModule
  ],
  providers: [NewsUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

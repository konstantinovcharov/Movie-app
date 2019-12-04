import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { MoviesComponent } from './movies/movies.component';
import { VideoPlayComponent } from './video-play/video-play.component';
import { AppRouterModule } from './app-router/app-router.module';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    VideoPlayComponent,
    TvShowsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

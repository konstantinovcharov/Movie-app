import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { MoviesComponent }   from '../movies/movies.component';
import { TvShowsComponent}   from '../tv-shows/tv-shows.component';
import { VideoPlayComponent } from '../video-play/video-play.component';


const appRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'tvshows', component: TvShowsComponent},
  { path: 'video-play/:path', component: VideoPlayComponent },
  { path: '',   redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: MoviesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }

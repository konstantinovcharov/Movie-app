import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TVShow } from '../tvshow';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  private tvshows : TVShow[];
private searchName : string;
  constructor(private service : HttpService, 
              private route: ActivatedRoute,
              private router: Router) { 
  }

 

  ngOnInit() {
  }

  async playTVShow(tvshow:TVShow){
    let path : string = await this.service.getVideos(tvshow.id);
    this.router.navigate(['/video-play', path]);
}

onClick(searchName:string){
  this.service.getTVShow(searchName).subscribe(response => this.tvshows = response);
}

popularTVShows(){
  this.service.getMostPopularTVShows().subscribe(response => this.tvshows = response);
}

highRatedTVShows(){
  this.service.getHigestRatedTVShows().subscribe(response => this.tvshows = response);
}

upcomingTVShows(){
  this.service.getOnAirTVShows().subscribe(response => this.tvshows = response);
}

}

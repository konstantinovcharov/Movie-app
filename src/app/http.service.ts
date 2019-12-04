import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

import { Movie } from './movie';
import { TVShow } from './tvshow';

interface IMovieData {results : Movie[];}
interface ITVShowData {results : TVShow[];}
export interface IVideoData {results : IVideo[];}
export interface IVideo {'id': string; 'key':string; 'name':string; 'site': string; 'type':string; }



@Injectable()
export class HttpService {

  private movies : any;
  private tvshows: any;
  private key : string;

  constructor(private http : Http) { }

  public getMovies(): Observable<Response>{
    return this.http.get("http://api.themoviedb.org/3/search/movie?query=skyfall&api_key=81c50c197b83129dd4fc387ca6c8c323");
  }


  public getMovie(title : string) : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/3/search/movie?query=" + title + "&api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
                        'title' : movie.title,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
                        'adult' : movie.adult,
                        'overview' : movie.overview,
                        'release_date' : movie.release_date,
                        'genres' : movie.genres,
                        'vote_average' : movie.vote_average }})

    })
  }

  public getTVShow(title : string) : Observable<TVShow[]> {
    return this.http.get("http://api.themoviedb.org/3/search/tv?query=" + title + "&api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : ITVShowData = response.json();
      return data.results.filter(tvshow => tvshow.poster_path !== null).map(tvshow => 
        {return <TVShow>{'id' : tvshow.id,
                        'name' : tvshow.name,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+tvshow.poster_path, 
                        'adult' : tvshow.adult,
                        'overview' : tvshow.overview,
                        'first_air_date' : tvshow.first_air_date,
                        'genres' : tvshow.genres,
                        'vote_average' : tvshow.vote_average }})
    
      })
    }
  public getMostPopularMovies() : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
                        'title' : movie.title,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
                        'adult' : movie.adult,
                        'overview' : movie.overview,
                        'release_date' : movie.release_date,
                        'genres' : movie.genres,
                        'vote_average' : movie.vote_average }})

    })
  }

public getHigestRatedMovies() : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&primary_release_year=2017&sort_by=vote_average.desc&api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
                        'title' : movie.title,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
                        'adult' : movie.adult,
                        'overview' : movie.overview,
                        'release_date' : movie.release_date,
                        'genres' : movie.genres,
                        'vote_average' : movie.vote_average }})

    })
  }
public getUpcommingMovies() : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/3/movie/upcoming?api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
                        'title' : movie.title,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
                        'adult' : movie.adult,
                        'overview' : movie.overview,
                        'release_date' : movie.release_date,
                        'genres' : movie.genres,
                        'vote_average' : movie.vote_average }})

    })
  }

  

  public getTVShows(): Observable<Response>{
    return this.http.get("http://api.themoviedb.org/3/search/tv?query=flash&api_key=81c50c197b83129dd4fc387ca6c8c323")
  }


    public getMostPopularTVShows() : Observable<TVShow[]> {
      return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US&page=1")
      .map(response => {
        const data : ITVShowData = response.json();
        return data.results.filter(tvshow => tvshow.poster_path !== null).map(tvshow => 
          {return <TVShow>{'id' : tvshow.id,
                          'name' : tvshow.name,
                          'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+tvshow.poster_path, 
                          'adult' : tvshow.adult,
                          'overview' : tvshow.overview,
                          'first_air_date' : tvshow.first_air_date,
                          'genres' : tvshow.genres,
                          'vote_average' : tvshow.vote_average }})
  
      })
    }
 
    public getHigestRatedTVShows() : Observable<TVShow[]> {
      return this.http.get("https://api.themoviedb.org/3/tv/top_rated?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US&page=1c")
      .map(response => {
        const data : ITVShowData = response.json();
        return data.results.filter(tvshow => tvshow.poster_path !== null).map(tvshow => 
          {return <TVShow>{'id' : tvshow.id,
                          'name' : tvshow.name,
                          'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+tvshow.poster_path, 
                          'adult' : tvshow.adult,
                          'overview' : tvshow.overview,
                          'first_air_date' : tvshow.first_air_date,
                          'genres' : tvshow.genres,
                          'vote_average' : tvshow.vote_average }})
  
      })
    }


    public getOnAirTVShows() : Observable<TVShow[]> {
      return this.http.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US&page=1")
      .map(response => {
        const data : ITVShowData = response.json();
        return data.results.filter(tvshow => tvshow.poster_path !== null).map(tvshow => 
          {return <TVShow>{'id' : tvshow.id,
                          'name' : tvshow.name,
                          'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+tvshow.poster_path, 
                          'adult' : tvshow.adult,
                          'overview' : tvshow.overview,
                          'first_air_date' : tvshow.first_air_date,
                          'genres' : tvshow.genres,
                          'vote_average' : tvshow.vote_average }})
  
      })
    }


 getVideo(id:number) : Observable<IVideo>{
    console.log("getvideo1: " + id);
    let video = this.http.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : IVideoData = response.json();
      return data.results;}).mergeMap(processArray => {
        return processArray.filter(x=> x.key !== null);
      }).first();
      console.log("video: " + video);
      return video;
}

async getVideos(id:number) : Promise<string>{
    console.log("getvideo1: " + id);
    const response = await this.http.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=81c50c197b83129dd4fc387ca6c8c323").toPromise();
    return response.json().results[0].key;    
}

  getYouTubePath(id: number): string {
      let path : string = "https://www.youtube.com/embed/"+ JSON.stringify(this.getVideos(id));
      return path;
}}
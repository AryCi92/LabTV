import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  api_key:string ="k_cbl1rbq9" 
  
  wsFilm:string ="https://imdb-api.com/it/API/MostPopularMovies/"

  getFilm():Observable<any>{
    return this.http.get(this.wsFilm + this.api_key)
  }

  
  wsFilmDetail:string =`https://imdb-api.com/it/API/Title/${this.api_key}/`;

  getFilmDetail(id:any):Observable<any>{
    return this.http.get(this.wsFilmDetail+id)
  }


  wsTrailer:string = `https://imdb-api.com/en/API/YouTubeTrailer/${this.api_key}/`;

  getTrailer(id:any):Observable<any>{
    return this.http.get(this.wsTrailer+id)
  }
}




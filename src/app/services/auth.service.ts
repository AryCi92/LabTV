import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  wsRegister:string="http://localhost:3000/register"

  httpOptions={
    headers:new HttpHeaders(
      {"Content-type": "application/json"}
    )
  }

  register(user:any):Observable<any>{
    return this.http.post(this.wsRegister, user, this.httpOptions)
  }


  wsLogin:string="http://localhost:3000/login"

  login(user:any):Observable<any>{
    return this.http.post(this.wsLogin, user, this.httpOptions)
  }


  wsUser:string="http://localhost:3000/users/"

  getUser(accessToken:any, id:any):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {"Authorization": "Bearer "+ accessToken}
      )
    }
    return this.http.get(this.wsUser+id, httpOptions)
  }


  wsFilmAcquistati:string="http://localhost:3000/films-acquistati"

  getFilmAcquistati(accessToken:any):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {"Authorization": "Bearer " + accessToken}
      )
    }
    return this.http.get(this.wsFilmAcquistati, httpOptions)
  }

  addFilm(film:any, accessToken:string):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {"Authorization": "Bearer " + accessToken}
      )
    }
    return this.http.post(this.wsFilmAcquistati, film, httpOptions)
  }

  deleteFilm(id:any, accessToken:string):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {"Authorization": "Bearer " + accessToken}
      )
    }
    return this.http.delete(`${this.wsFilmAcquistati}/${id}`, httpOptions)
  }
}



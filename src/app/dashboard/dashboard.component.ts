import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth:AuthService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("loggedIn") != "true") { 
      this.router.navigate(["/login"])
    }
    else{
       this.getUser()
       this.getFilmAcquistati()
    }
  }
  isDatiVisible:boolean=false
  isFilmVisible:boolean=true
  isMessageVisible:boolean=false
  accessToken:any = localStorage.getItem('accessToken')
  user_id:any = localStorage.getItem('user_id')
  userData:any={}
  filmAcquistati:any=[]

  getUser(){
    this.auth.getUser(this.accessToken, this.user_id).subscribe(
      (data)=>{
        console.log(data)
        this.userData=data
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  
  getFilmAcquistati(){
    this.auth.getFilmAcquistati(this.accessToken).subscribe(
      (data)=>{
        console.log(data)
        this.filmAcquistati=data.filter((f:any)=>f.userId == this.user_id)
        if(this.filmAcquistati.length == 0){
          this.isMessageVisible=true
        }
      },
      (err)=>{
        console.log(err)
      }
    )
    this.isDatiVisible=false
  }

  getData(){
    this.isDatiVisible=true
    this.isFilmVisible=false
  }

  getFilm(){
    this.isDatiVisible=false
    this.isFilmVisible=true
  }

  deleteFilm(film:any){
    this.auth.deleteFilm(film.id, this.accessToken).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}

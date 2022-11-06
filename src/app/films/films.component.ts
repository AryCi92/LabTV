import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.getNuoveUscite()
  }

  nuoveUscite:Array<any>=[]
  piuVisti:Array<any>=[]
  premiati:Array<any>=[]
  incassi:Array<any>=[]
  momento:Array<any>=[]


  getNuoveUscite(){
    this.filmService.getFilm().subscribe(
      (data)=>{
        console.log(data.items)
        this.nuoveUscite=data.items.filter((f:any)=>f.rank<=25)
        this.piuVisti=data.items.filter((f:any)=>f.rank>=26 && f.rank<=50)
        this.premiati=data.items.filter((f:any)=>f.rank>=51 && f.rank<=75)
        this.incassi=data.items.filter((f:any)=>f.rank>=76 && f.rank<=100)
      },
      (err)=>{console.log(err)}
    )
  }  
}

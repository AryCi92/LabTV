import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.getFilms()
  }

  term:string=''
  films:Array<any>=[]

  getFilms(){
    this.filmService.getFilm().subscribe(
      (data)=>{
        console.log(data.items)
        this.films=data.items
      },
      (err)=>{console.log(err)}
    )
  }

}

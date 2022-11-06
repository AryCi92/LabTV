import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService,
    private auth: AuthService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id')
    this.getFilmDetail()
  }

  film: any = {}

  isTrailerVisible: boolean = false

  video: any = {}

  Safeurl: SafeResourceUrl = ''

  isMyMessageVisible: boolean = false

  myFilm:any={}

  accessToken:any = localStorage.getItem('accessToken')

  isSpanVisible:boolean=false

  getFilmDetail() {
    this.filmService.getFilmDetail(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        console.log(data)
        this.film = data
      },
      err => console.log(err)
    )
  }

  back() {
    this.router.navigate(['/home'])
  }

  getSimilarFilmDetail(x: any) {
    this.filmService.getFilmDetail(x).subscribe(
      (data) => {
        console.log(data)
        this.film = data
        window.location.reload()
      },
      err => console.log(err)
    )
  }

  getTrailer() {
    this.filmService.getTrailer(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        console.log(data)
        this.video = data
        if (this.video.videoUrl === "") {
          this.isTrailerVisible = true
          this.isMyMessageVisible = true
        }
        else {
          let url = this.video.videoUrl.replace('watch?v=', 'embed/')
          this.Safeurl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
          this.isTrailerVisible = true
        }

      },
      (err) => {
        console.log(err)
      }
    )
  }

  close() {
    this.isTrailerVisible = false
  }

  addFilm(film:any) {
    if (localStorage.getItem("loggedIn") == "true") {
      this.myFilm={
        userId: localStorage.getItem('user_id'),
        title: film.title,
        image: film.image
      }
      this.auth.addFilm(this.myFilm, this.accessToken).subscribe(
        (data)=>{
          console.log(data)
          this.isSpanVisible=true
        },
        (err)=>{
          console.log(err)
        }
      ) 
    }
    else {
      this.router.navigate(["/login"])
    }
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch: 'full'},
  {path:"home", component: HomeComponent},
  {path:"contatti", component: ContattiComponent},
  {path:"login", component: LoginComponent},
  {path:"film-detail/:id", component: FilmDetailComponent},
  {path:"catalogo", component: CatalogoComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"dashboard/:accessToken", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

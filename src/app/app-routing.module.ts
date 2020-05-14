import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { ArtistaComponent } from './pages/artista/artista.component';


const routes: Routes = [

  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  
  { path: 'artistas', component: ArtistasComponent},
  { path: 'artista/:id', component: ArtistaComponent},
  // { path: '', pathMatch: 'full',  redirectTo: 'usuarios' } /*cualquier pagina redireccionara a usuarios*/

  // PAGINA PRINCIPAL CON EL FULL
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full',  redirectTo: 'home' } /*cualquier pagina redireccionara a usuarios*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

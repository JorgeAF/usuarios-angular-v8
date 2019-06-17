import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [

  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: '', pathMatch: 'full',  redirectTo: 'usuarios' } /*cualquier pagina redireccionara a usuarios*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

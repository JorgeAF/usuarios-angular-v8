import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuariosComponent,
    HomeComponent,
    ArtistaComponent,
    ArtistasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

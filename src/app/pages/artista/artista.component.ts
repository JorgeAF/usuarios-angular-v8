import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { ArtistaModel } from 'src/app/models/artista.model';
import { ArtistasService } from 'src/app/services/artistas.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'jor-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class ArtistaComponent implements OnInit {


  artista: ArtistaModel = new ArtistaModel();

  constructor(private artistasService: ArtistasService,
              private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo') {

      this.artistasService.getArtista( id )
        .subscribe( (resp: ArtistaModel) => {
        this.artista = resp;
        this.artista.id = id;
      });
    }

  }

  guardarArtista(form:NgForm) {

    if (form.invalid) {
      console.log('Formulario Invalido');
      // console.log("Usuario",form);
      // console.log("Usuario",form.value);
      // console.log("Usuario",this.usuario);
      
      return;
    }

    // mensaje de alertas
    Swal.fire({
      title: 'Espere',
      text : 'Guardando Informacion',
      type : 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let peticion: Observable<any> ;

    if (this.artista.id) {
      peticion = this.artistasService.actualizarArtista(this.artista);
    } else {
      peticion = this.artistasService.crearArtista(this.artista);
    }

    peticion.subscribe(resp =>{
      Swal.fire({
        title: this.artista.nombres,
        text: 'Se guardo correctamente',
        type: 'success'
      });

    });

  }

}

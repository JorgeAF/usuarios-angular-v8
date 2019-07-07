import { Component, OnInit } from '@angular/core';
import { ArtistasService } from '../../services/artistas.service';
import { ArtistaModel } from 'src/app/models/artista.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'jor-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  artistas: ArtistaModel[] = [];
  cargando = false;

  constructor(private artistasService: ArtistasService ) { }

  ngOnInit() {
    this.cargando = true;
    this.artistasService.getArtistas()
      .subscribe(resp => {
        this.artistas = resp;
        this.cargando = false;
      });

  }

  borrarArtista(artista: ArtistaModel, i:number){
    Swal.fire({
      title: 'Esta Seguro?',
      text: `Esta seguro que desea borrar  a ${artista.nombres}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
    
      if (resp.value) {
        this.artistas.splice( i, 1 );
        this.artistasService.borrarArtista(artista.id).subscribe();
      }
    
    });
    
  }

  

}

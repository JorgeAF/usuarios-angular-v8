import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'jor-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  cargando = false;

  constructor(private usuariosService: UsuariosService ) { }

  ngOnInit() {
    this.cargando = true;
    this.usuariosService.getUsuarios()
      .subscribe(resp => {
        this.usuarios = resp;
        this.cargando = false;
      });

  }

  borrarUsuario(usuario: UsuarioModel, i:number){
    Swal.fire({
      title: 'Esta Seguro?',
      text: `Esta seguro que desea borrar  a ${usuario.nombres}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
    
      if (resp.value) {
        this.usuarios.splice( i, 1 );
        this.usuariosService.borrarUsuario(usuario.id).subscribe();
      }
    
    });
    
    
    
    
  }


}

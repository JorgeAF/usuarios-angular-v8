import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { UsuarioModel } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'jor-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  usuario: UsuarioModel = new UsuarioModel();


  constructor(private usuariosService: UsuariosService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
  
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo') {

      this.usuariosService.getUsuario( id )
        .subscribe( (resp: UsuarioModel) => {
        this.usuario = resp;
        this.usuario.id = id;
      });
    }
    

  }


  guardar(form:NgForm) {

    if (form.invalid) {
      console.log('Formulario Invalido');
      
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

    if (this.usuario.id) {
      peticion = this.usuariosService.actualizarUsuario(this.usuario);
    } else {
      peticion = this.usuariosService.crearUsuario(this.usuario);
    }

    peticion.subscribe(resp =>{
      Swal.fire({
        title: this.usuario.nombres,
        text: 'Se guardo correctamente',
        type: 'success'
      });

    });


  }



}

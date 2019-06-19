import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'jor-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  usuario: UsuarioModel = new UsuarioModel();


  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
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
        title: this.usuario.nombre,
        text: 'Se actualizo correctamente',
        type: 'success'
      });

    });


  }



}

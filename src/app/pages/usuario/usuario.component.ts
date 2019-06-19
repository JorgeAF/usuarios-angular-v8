import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

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

    if (this.usuario.id) {
      this.usuariosService.actualizarUsuario(this.usuario)
          .subscribe(resp =>{
            console.log(resp);
          })
    } else {
      
      this.usuariosService.crearUsuario(this.usuario)
          .subscribe(resp =>{
            console.log(resp);
            this.usuario = resp;
          })
    }



  }



}

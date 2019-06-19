import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'jor-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService ) { }

  ngOnInit() {

    this.usuariosService.getUsuarios()
      .subscribe(resp => {
      console.log(resp);
      
    });

  }

}

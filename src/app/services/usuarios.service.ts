import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map,delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private url = 'https://sobodaycom-58d3f.firebaseio.com';  /* url Firebase */

  constructor(private http:HttpClient) {}

  
  crearUsuario( usuario: UsuarioModel ){
    return this.http.post(`${ this.url }/usuarios.json`, usuario)
          .pipe(
              map((resp: any) =>{
                usuario.id = resp.name;
                return usuario;
              })
            )

  }

  actualizarUsuario(usuario: UsuarioModel){

    const usuarioTemp = {
      ...usuario    /* ...(operador spret) para traer propiedades del objeto */
    };

    delete usuarioTemp.id;

    return this.http.put(`${this.url}/usuarios/${usuario.id}.json`,usuarioTemp);
  }


  borrarUsuario( id:string ){
    return this.http.delete(`${ this.url }/usuarios/${ id }.json`);

  }




  getUsuario( id: string){
    return this.http.get(`${ this.url }/usuarios/${ id }.json`);
  }


  getUsuarios(){
    return this.http.get(`${this.url }/usuarios.json`)
            .pipe(
            map( this.crearArreglo ),
            delay(200)
    );
  }

  private crearArreglo( usuariosObj: object) {
  
    const usuarios: UsuarioModel [] = [];


    Object.keys(usuariosObj ).forEach(key =>{

      const usuario: UsuarioModel = usuariosObj[key];
      usuario.id = key;

      usuarios.push( usuario );

    });

    // para retonar vacio si no ay datos en bd
    if (usuariosObj === null) {
      return [];
    }

    return usuarios;

  }

}

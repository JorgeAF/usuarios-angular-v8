import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

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
  

getUsuarios(){
  return this.http.get(`${this.url }/usuarios.json`)
          .pipe(
          map( this.crearArreglo )
  );
}

private crearArreglo( usuariosObj: object) {
  
  return 'Hola mundo';

}

}

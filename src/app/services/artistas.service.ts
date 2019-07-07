import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtistaModel } from '../models/artista.model';
import { map,delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  private url = 'https://sobodaycom-58d3f.firebaseio.com';  /* url Firebase */


  constructor(private http:HttpClient) { }

  crearArtista( artista: ArtistaModel ){
    return this.http.post(`${ this.url }/artistas.json`, artista)
          .pipe(
              map((resp: any) =>{
                artista.id = resp.name;
                return artista;
              })
            )

  }

  actualizarArtista(artista: ArtistaModel){

    const artistaTemp = {
      ...artista    /* ...(operador spret) para traer propiedades del objeto */
    };

    delete artistaTemp.id;

    return this.http.put(`${this.url}/artistas/${artista.id}.json`,artistaTemp);
  }


  borrarArtista( id:string ){
    return this.http.delete(`${ this.url }/artistas/${ id }.json`);

  }




  getArtista( id: string){
    return this.http.get(`${ this.url }/artistas/${ id }.json`);
  }


  getArtistas(){
    return this.http.get(`${this.url }/artistas.json`)
            .pipe(
            map( this.crearArreglo ),
            delay(200)
    );
  }

  private crearArreglo( artistasObj: object) {
  
    const artistas: ArtistaModel [] = [];


    Object.keys(artistasObj ).forEach(key =>{

      const artista: ArtistaModel = artistasObj[key];
      artista.id = key;

      artistas.push( artista );

    });

    // para retonar vacio si no ay datos en bd
    if (artistasObj === null) {
      return [];
    }

    return artistas;

  }

}

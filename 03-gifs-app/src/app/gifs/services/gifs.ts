import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../Interfaces/gifs-interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public listadoGifs: Gif[] = [];

  private http = inject(HttpClient);
  
  private _historialEtiquetas: string[] = [];
  private apiKey: string = "ByfIwSevcptrYRsjOT8QK3cVAm9PuTtd";
  private servicioUrl: string = "https://api.giphy.com/v1/gifs";

  get historialEtiquetas(): string[] {
    return [...this._historialEtiquetas];
  }

  buscarEtiqueta(etiqueta: string) {
    // pasar a minúsculas para controlar duplicados
    for(let etiq of this._historialEtiquetas) {
      etiq = etiq.toLowerCase();
    }

    // evitar etiquetas vacías
    if(etiqueta.trim().length === 0) {
      return;
    }

    // limitar el historial a 10 etiquetas
    if(this._historialEtiquetas.length < 10) {

      // evitar duplicados
      if(!this._historialEtiquetas.includes(etiqueta)) {
        this._historialEtiquetas.unshift(etiqueta);
        console.log(this.historialEtiquetas);
      }

      const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('q', etiqueta)
        .set('limit', '5');
      
      this.http.get<SearchResponse>(`${this.servicioUrl}/search`, { params })
        .subscribe( resp => {
          this.listadoGifs = resp.data;
        } );
    }
  }
}

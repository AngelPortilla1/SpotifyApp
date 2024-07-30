import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newReleases : [] = [];

  getNewRelease () 
    {
      return this.getQuery('browse/new-releases?limit=20').pipe( map( (data: any) =>{
        return data['albums'].items;      
       }))
    }


  getQuery(query: string){

      const url =`https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQCeMUD_nxnDBVX3rXm4OtDvsQw9d6d5cq0n6-c1i9vPlm-6966XDJCDTpJUVE2PvH6v8TR_0m36fRsTFUmEhhMoSvSpBT2O8K4TmRT-9wpPLOBW74A'
      });

      return this.http.get(url, {headers});
    }

    getArtistas (termino: string)
    {
      return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe( map( (data:any) =>{
        return data['artists'].items;
      }))
   
    }
    getArtista(id: string) {
      return this.getQuery(`artists/${id}`);
    }
  
    getTopTracks(id: string) {
      return this.getQuery(`artists/${id}/top-tracks?market=US`).pipe(map((data: any) => data.tracks));
    }

    constructor(private http: HttpClient) { }
  }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {
  artista:any = {};
  cargarArtista:boolean= true;
  topTracks: any[] =[];

  constructor(private router: ActivatedRoute,
    private service: SpotifyService) { 
      this.router.params.subscribe( params =>{
      
        this.getArtista(params['id'])
        this.getTopTracks(params['id'])
  
      });
    }
    getArtista( id: string){

      this.service.getArtista(id).subscribe(response => {
        console.log('Artista response:', response);
        // Asigna la respuesta o un objeto vacío si la respuesta es nula
        this.artista = response || {};
        // Asegúrate de que images sea un arreglo vacío si no está definido
        this.artista.images = this.artista.images || [];
        this.cargarArtista = false;
      }, error => {
        console.error('Error al obtener el artista:', error);
        // Inicializa artista y images en caso de error
        this.artista = {};
        this.artista.images = [];
        this.cargarArtista = false;
      });
     }
  
     getTopTracks(id: string)
     {
      this.service.getTopTracks(id ).subscribe(response =>{
        console.log('top tracks ->',response);
        this.topTracks = response;
      })
     }

     regresar() {
      window.history.back();
    }
  

  //ngOnInit(): void {
  //}

}

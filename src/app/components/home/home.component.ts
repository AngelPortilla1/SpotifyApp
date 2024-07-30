import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    newReleases: any[] = [];
    loadingCarga: boolean;
    errorService: boolean;
    mensaje : string = '';

    constructor(private Spotify: SpotifyService) {
      this.loadingCarga = true;
      this.errorService = false;

      this.Spotify.getNewRelease().subscribe((data:any)=>{
        console.log('get ->', data);
        this.newReleases= data;
        this.loadingCarga= false;
      },(error)=>{

        console.log('Error en la peticion',error);
        this.mensaje=error.error.error.message;
        this.loadingCarga= false;
        this.errorService = true;
      });
    }
    
  
    ngOnInit(): void {
      
    }
  

}

  //constructor() { }

  //ngOnInit(): void {
  


//constructor
//console.log("--- Iniciando el constructor");
  // this.http.get('https://restcountries.com/v3.1/lang/spanish').subscribe((data: any) => {
   //this.paises = data;
  //console.log("paises ->",this.paises);
    // })

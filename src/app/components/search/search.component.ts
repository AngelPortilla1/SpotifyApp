import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas : any[]=[]
  loadingCarga: boolean;

  constructor(private Spotify: SpotifyService) { 
    this.loadingCarga = false;

  }

  buscar(termino: string) {
    this.loadingCarga = true;
    this.Spotify.getArtistas(termino).subscribe(
      data => {
        this.artistas = data;
        this.loadingCarga = false;
      },
      error => {
        console.error('Error fetching artists', error);
        this.loadingCarga = false;
      }
    );
  }

  ngOnInit(): void {
  }
}

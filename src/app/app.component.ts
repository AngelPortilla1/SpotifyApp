import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpotifyApp';
  newReleases :any[] = [];
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getNewRelease().subscribe(
      data => {
        this.newReleases = data;
      },
      error => {
        console.error('Error fetching new releases', error);
      }
    );
  }
}


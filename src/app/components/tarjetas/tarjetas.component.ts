import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private router: Router) { 

  }
  verArtista(item: any) {
    let artistaId;
    if (item.type === 'album' && item.artists) {
      artistaId = item.artists[0].id;
    } else if (item.id) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistaId]);
  }

  ngOnInit(): void {
  }

}

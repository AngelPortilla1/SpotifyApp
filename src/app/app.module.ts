import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorsComponent } from './components/shared/errors/errors.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';
//import { DomsegurosPipePipe } from './pipes/domseguros-pipe.pipe';
//import { NoimagePipePipe } from './pipes/noimage-pipe.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SpotifyService } from './services/spotify.service';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ROUTES } from './app.routes';
import { HttpClient } from '@angular/common/http';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';




@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    HomeComponent,
    SearchComponent,
    ErrorsComponent,
    LoadingComponent,
    NabvarComponent,
    //DomsegurosPipePipe,
   // NoimagePipePipe,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash: true})
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

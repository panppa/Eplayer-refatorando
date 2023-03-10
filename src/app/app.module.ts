import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './templates/header/header.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { BannerComponent } from './templates/banner/banner.component';
import { GamesNavComponent } from './templates/games-nav/games-nav.component';
import { CampeonatosComponent } from './views/campeonatos/campeonatos.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { CardNoticiasComponent } from './templates/card-noticias/card-noticias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    InicioComponent,
    BannerComponent,
    GamesNavComponent,
    CampeonatosComponent,
    FooterComponent,
    NoticiasComponent,
    CardNoticiasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

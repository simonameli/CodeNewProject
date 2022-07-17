import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContattiComponent } from './modules/contatti/contatti.component';
import { AziendaComponent } from './modules/azienda/azienda.component';

import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, ContattiComponent, AziendaComponent, HomepageComponent ],
  exports: [ HeaderComponent, FooterComponent, ContattiComponent,AziendaComponent, HomepageComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

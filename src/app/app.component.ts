import { Component, VERSION } from '@angular/core';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { ContattiComponent } from './modules/contatti/contatti.component';
import { AziendaComponent } from './modules/azienda/azienda.component';
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private route: Router) {
    this.route.navigate(['home']);
   
  }

}

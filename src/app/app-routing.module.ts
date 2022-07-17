import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './modules/contatti/contatti.component';
import { AziendaComponent } from './modules/azienda/azienda.component';
import { HomepageComponent } from './modules/homepage/homepage.component';

const routes: Routes = [
  { path: 'contatti', component: ContattiComponent},
  { path: 'azienda', component: AziendaComponent},
  { path: 'home', component: HomepageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
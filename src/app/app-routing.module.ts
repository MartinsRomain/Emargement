import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilisateurformComponent} from "./utilisateurform/utilisateurform.component";
import {AdministrationComponent} from "./administration/administration.component";
import {CoursformComponent} from "./cours-form/cours-form.component";
import {GroupeformComponent} from "./groupe-form/groupe-form.component";


export const appRouteList: Routes = [
  {
    path: 'administration',
    component: AdministrationComponent
  },
  {
    path: 'administration/utilisateur',
    component: UtilisateurformComponent
  },
  {
    path: 'administration/groupe',
    component: GroupeformComponent
  },
  {
    path: 'administration/cours',
    component: CoursformComponent
  },
  {
    path: '**',
    redirectTo: 'administration'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRouteList)
  ]
})

export class AppRoutingModule { }

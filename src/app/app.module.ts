import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {UtilisateurformComponent} from "./utilisateurform/utilisateurform.component";
import {AdministrationComponent} from "./administration/administration.component";
import {CoursformComponent} from "./cours-form/cours-form.component";
import {GroupeformComponent} from "./groupe-form/groupe-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    UtilisateurformComponent,
    CoursformComponent,
    GroupeformComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

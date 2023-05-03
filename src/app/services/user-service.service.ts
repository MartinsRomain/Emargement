import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private usersUrl: string;

  constructor(
    private http : HttpClient
  ) {
    this.usersUrl = 'http://localhost:8080/api/utilisateurs';
  }

  send(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(this.usersUrl, utilisateur);
  }
}

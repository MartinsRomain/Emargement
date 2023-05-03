import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilisateurService} from "../services/user-service.service";
import {Utilisateur} from "../model/Utilisateur";

@Component({
  selector: 'utilisateur-form',
  templateUrl: './utilisateurform.component.html',
  styleUrls: ['./utilisateurform.component.scss']
})
export class UtilisateurformComponent implements OnInit {

  utilisateur : Utilisateur = {} as Utilisateur;

  contactForm : FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['', [Validators.required]]
  });

  constructor(
    private formBuilder : FormBuilder,
    private utilisateurService : UtilisateurService,
    activatedRoute : ActivatedRoute
  ) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.bindUtilisateur();

    this.utilisateurService.send(this.utilisateur).subscribe(response => console.log(JSON.stringify(response)));
  }

  private bindUtilisateur() {
    this.utilisateur.nom = this.contactForm.get("nom")?.value;
    this.utilisateur.nom = this.contactForm.get("prenom")?.value;
    this.utilisateur.nom = this.contactForm.get("login")?.value;
    this.utilisateur.nom = this.contactForm.get("password")?.value;
    this.utilisateur.nom = this.contactForm.get("role")?.value;
  }
}

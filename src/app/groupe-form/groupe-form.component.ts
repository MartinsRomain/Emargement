import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'groupe-form',
  templateUrl: './groupe-form.component.html',
  styleUrls: ['./groupe-form.component.scss']
})
export class GroupeformComponent implements OnInit {

  constructor(
    activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

}

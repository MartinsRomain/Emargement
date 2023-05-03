import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'cours-form',
  templateUrl: './cours-form.component.html',
  styleUrls: ['./cours-form.component.scss']
})
export class CoursformComponent implements OnInit {

  constructor(
    activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

}

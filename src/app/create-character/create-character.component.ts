import { Component, OnInit } from '@angular/core';
import { WarStarService } from '../war-star.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [{display: 'None', value: ''}, {display: 'available', value: 'available'}, {display: 'Busy', value: 'busy'}];
  warStar: WarStarService;

  constructor(warStar: WarStarService) {this.warStar = warStar; }

  ngOnInit() {
  }

  submit(form) {
    if (form.invalid) {console.log("form invalid!"); return;}
    console.log(form.value);
    this.warStar.addCharacter(form.value.name, form.value.side, form.value.subjects);
  }

}

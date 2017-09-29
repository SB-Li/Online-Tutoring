import { Component, OnInit, Input } from '@angular/core';
import { WarStarService } from '../war-star.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {

  constructor(warStar: WarStarService) { this.warStar = warStar;}

  warStar: WarStarService;
  chosenList = 'all';
  characters = [];

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = this.warStar.getCharacters(this.chosenList);
    return this.characters;
  }

  ngOnInit() {
  }

}

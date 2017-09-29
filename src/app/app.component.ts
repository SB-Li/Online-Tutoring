import { Component, OnInit } from '@angular/core';
import { WarStarService } from './war-star.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  warStar: WarStarService;

  constructor(warStar: WarStarService) {
    this.warStar = warStar;
  }

  ngOnInit() {
    this.warStar.fetchCharacters();
  }
}

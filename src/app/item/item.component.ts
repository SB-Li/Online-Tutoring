import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WarStarService } from '../war-star.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  warStarService: WarStarService;

  constructor(warStarService: WarStarService) { this.warStarService = warStarService; }

  onAssignSide(side) {
    this.warStarService.onAssignSide({name: this.character.name, side: side, subjects: this.character.subjects});
  }

  ngOnInit() {
  }

}

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WarStarService } from '../war-star.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters = [];
  activatedRoute: ActivatedRoute;
  warStarService: WarStarService;
  loadedSide = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, warStarService: WarStarService) {
    this.activatedRoute = activatedRoute;
    this.warStarService = warStarService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.characters = this.warStarService.getCharacters(params.side);
      this.loadedSide = params.side;
    });
    this.subscription = this.warStarService.sideChanged.subscribe((params) => {
      this.characters = this.warStarService.getCharacters(this.loadedSide);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

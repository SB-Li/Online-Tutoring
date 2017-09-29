import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Subject } from 'rxjs/subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WarStarService {

  logService: LogService;
  sideChanged = new Subject<void>();
  http: Http;
  i = 0;
  subjectsSet = ['JAVA', 'JAVASCRIPT', 'C++', 'C#', 'HTML', 'CSS', 'ANGULAR', 'JQUERY'];
  subject;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  private characters = [];

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people/')
      .map((response) => {
        const objects = response.json();
        const results = objects.results;
        const data = results.map((person) => {
          this.subject = this.subjectsSet[this.i % 8] + ',' + this.subjectsSet[this.i % 8 + 1];
          this.i += 2;
          return {name: person.name, side: '', subjects: this.subject};
        });
        return data;
      })
      .subscribe((data) => {
        this.characters = data;
        this.sideChanged.next();
      });
  }

  onAssignSide(object) {
    this.characters.forEach(
      (obj) => { if ( obj.name === object.name ) obj.side = object.side; }
    );
    this.sideChanged.next();
    this.logService.consoleLog("side updated!");
  }

  getCharacters(side) {
    if (side === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((data) => data.side === side);
  }

  addCharacter(name, side, subjects) {
    const position = this.characters.findIndex((obj) => obj.name === name);
    if (position != -1) {console.log("duplicated!"); return;}
    const newChar = {name: name, side: side, subjects: subjects};
    this.characters.push(newChar);
  }

}

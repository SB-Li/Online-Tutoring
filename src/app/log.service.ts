import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  consoleLog(info: string){
    console.log(info);
  }

}

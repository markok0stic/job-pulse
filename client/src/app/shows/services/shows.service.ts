import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {Show} from "../models/show";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  constructor() { }
  getShows(): Observable<Show> {
    const shows= [
      {id:1,name: 'Play A'},
      {id:2,name: 'Play B'},
      {id:3,name: 'Play C'},
    ];
    return of(shows).pipe(delay(2000));
  }
}

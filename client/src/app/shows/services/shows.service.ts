import { Injectable } from '@angular/core';
import {delay, from, Observable, of} from "rxjs";
import {Show} from "../models/show";

@Injectable()
export class ShowsService {
  getShows(): Observable<Show> {
    const shows = [
      {id: 1, name: 'Play A'},
      {id: 2, name: 'Play B'},
      {id: 3, name: 'Play C'},
    ];
    return from(shows).pipe(delay(2000));
  }
}

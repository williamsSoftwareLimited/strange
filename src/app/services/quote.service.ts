import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, from, of } from 'rxjs';
import { catchError, exhaustMap, map, share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes = [
    { statement: 'hello is it me your looking for...', person: 'frian franks'},
    { statement: 'when I was you, then who was I?', person: 'Aby Gby'},
    { statement: 'Right, Left. Which way to go. Up or down?', person: 'd. i. rections'},
    { statement: 'I ask a simple question, nothing could be more complex.', person: 'genius'},
    { statement: 'ok so you want me baby.', person: 'depeche mood'},
  ]
  index = 0
  constructor(private http: HttpClient) { }

  loadQuote$ = of(this.quotes).pipe(
  //loadQuote$ = this.http.get("quotes/quote_json.php").pipe(
    map( quotes => quotes[this.index] ),
    tap( () => this.index = this.index>=this.quotes.length-1 ? 0 : this.index+1 ),
    catchError(error => {
      console.error(error)
      return EMPTY
    }),
    share()
  )

  refresh$ = new BehaviorSubject(null)

  quote$ = this.refresh$.pipe(
    exhaustMap( () => this.loadQuote$) )

}

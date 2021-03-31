import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, from, of } from 'rxjs';
import { catchError, delay, exhaustMap, map, share, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes = [
    { statement: 'hello is it me your looking for...ok so you want me baby. I ask a simple question, nothing could be more complex. I ask a simple question, nothing could be more complex.I ask a simple question, nothing could be more complex.', person: 'frian franks'},
    { statement: 'when I was you, then who was I?', person: 'Aby Gby'},
    { statement: 'Right, Left. Which way to go. Up or down?', person: 'd. i. rections'},
    { statement: 'I ask a simple question, nothing could be more complex.', person: 'genius'},
    { statement: 'ok so you want me baby.', person: 'depeche mood'},
    { statement: 'abrakadabrah.', person: 'poof'},
  ]
  index = 0
  loadQuote$
  constructor(private http: HttpClient) {
    if (environment.production===true) this.loadQuote$ = this.http.get("quotes/quote_json.php")
    else
      this.loadQuote$ = of(this.quotes).pipe(
        delay(2000),
        map( quotes => quotes[this.index] ),
        tap( () => this.index = this.index>=this.quotes.length-1 ? 0 : this.index+1 ))

    this.loadQuote$.pipe(
      catchError(error => {
        console.error(error)
        return EMPTY
      })
    )
  }

  refresh$ = new BehaviorSubject(null)

  quote$ = this.refresh$.pipe(
    exhaustMap( () => this.loadQuote$) )
}

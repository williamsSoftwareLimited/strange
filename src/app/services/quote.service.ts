import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) {}

   getQuote(){
    return this.http.get("quotes/quote_json.php");
  }

  getTestQuote(){
    return of({ statement: 'hello is it me your looking for...', person: 'frian franks'})
  }
}

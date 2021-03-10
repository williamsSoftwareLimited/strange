import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers:[ QuoteService]
})
export class QuoteComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
  }

  quote$ = this.quoteService.getTestQuote()

}

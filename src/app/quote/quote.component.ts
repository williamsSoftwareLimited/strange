import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers:[ QuoteService]
})
export class QuoteComponent implements OnInit, OnDestroy {
  subscription: Subscription

  refreshTimer$ = timer(0, 120000)

  quote$ = this.quoteService.quote$ // this.quoteService.getTestQuote()

  constructor(public quoteService: QuoteService) { }

  ngOnInit(): void {
    this.subscription = this.refreshTimer$.subscribe(this.quoteService.refresh$)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

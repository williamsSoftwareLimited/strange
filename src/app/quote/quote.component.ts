import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { QuoteService } from '../services/quote.service';
import { trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers:[ QuoteService ],
  animations: []
})
export class QuoteComponent implements OnInit, OnDestroy {
  subscription: Subscription

  refreshTimer$ = timer(0, 120000)

  quote$ = this.quoteService.quote$

  constructor(public quoteService: QuoteService) { }

  ngOnInit(): void {
    this.subscription = this.refreshTimer$.subscribe(this.quoteService.refresh$)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

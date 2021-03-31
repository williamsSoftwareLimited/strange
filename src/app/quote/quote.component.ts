import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, of, Subscription, timer } from 'rxjs';
import { QuoteService } from '../services/quote.service';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { tap } from 'rxjs/operators';

const REFRESH_TIME = 120000

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers:[ QuoteService ],
  animations: [
    trigger('sizeAnimation', [
      state('small', style({
        transform: 'scale(0.5)',
        boxShadow: '0px 0px #0d0d0f',
        backgroundColor: '#1d1d20'
      })),
      state('large', style({
        transform: 'scale(1)',
        boxShadow: '5px 10px black',
        backgroundColor: '#0d0d0f'
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out')),
    ])
  ]
})
export class QuoteComponent implements OnInit, OnDestroy {
  subscription: Subscription
  state
  refreshTimer$ = timer(0, REFRESH_TIME)
  loadingQuote$ = of({ statement: "loading...", person: "loader"}).pipe(
    tap(()=>this.state='small')
  )
  quote$ = concat(this.loadingQuote$, this.quoteService.quote$.pipe(
    tap(()=>this.state='large'))
  )

  constructor(public quoteService: QuoteService) { }

  ngOnInit(): void {
    this.subscription = this.refreshTimer$.subscribe(this.quoteService.refresh$)
  }

  refresh(){
    this.quoteService.refresh$.next(0)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

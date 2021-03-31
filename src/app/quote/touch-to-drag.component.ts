import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animationFrameScheduler, concat, defer, fromEvent, interval, Observable, of, timer } from 'rxjs';
import { endWith, exhaustMap, filter, map, repeat, scan, startWith, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-touch-to-drag',
  templateUrl: './touch-to-drag.component.html'
})
export class TouchToDragComponent implements OnInit{
  @Output() refresh = new EventEmitter<void>()

  touchStart$ = fromEvent(document, 'touchstart')
  touchMove$ = fromEvent(document, 'touchmove')
  touchEnd$ = fromEvent(document, 'touchend')

  private _pos = 0
  returnTimer$ = timer(200);

  moveHome$ = interval(0, animationFrameScheduler).pipe(
    takeUntil(this.returnTimer$),
    map(() => this._pos -= 20),
    endWith(-200)
  );

  touchDrag$ = this.touchStart$.pipe(
    exhaustMap(start => concat(
        this.touchMove$.pipe(
          map(move => move['touches'][0].pageY - start['touches'][0].pageY),
          takeUntil(this.touchEnd$),
          tap(p => this._pos = p)
        ),
        this.moveHome$
    )),
    tap( y => {
      if (y > window.innerHeight/3) this.refresh.emit();
    }),
    takeWhile(y => y <= window.innerHeight/3)
  )

  moveHomeAfterLoad$ = this.quoteService.loadQuote$.pipe(
    exhaustMap(() => this.moveHome$)
  )

  positionUpdate$ = concat(
    this.touchDrag$,
    this.moveHomeAfterLoad$
  ).pipe(
    repeat()
  )

  position$ = this.positionUpdate$.pipe(
    startWith(0),
    map(y => Number(y) - 70)
  )

  transformPosition$ = this.position$.pipe(
    map(y => `translate3d(-35px, ${y}px, 0)`)
  )

  _rot = 0;
  rotationTimer$ = timer(360)
  rotationTween$ =  interval(10).pipe(
    takeUntil(this.rotationTimer$),
    map(() => this._rot += 10),
    repeat(),
    takeUntil(this.quoteService.loadQuote$)
  );
  rotations$ = this.quoteService.refresh$.pipe(
    exhaustMap( () => this.rotationTween$ )
  )
  transformRotate$ = this.rotations$.pipe(
    map(r => `rotate(${r}deg)`)
  )

  constructor(public quoteService: QuoteService) { }

  ngOnInit(): void {

  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animationFrameScheduler, defer, fromEvent, interval, Observable, of } from 'rxjs';
import { exhaustMap, map, startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-touch-to-drag',
  templateUrl: './touch-to-drag.component.html'
})
export class TouchToDragComponent implements OnInit{
  @Output() refresh = new EventEmitter<void>()

  touchStart$ = fromEvent(document, 'touchstart')
  touchMove$ = fromEvent(document, 'touchmove')
  touchEnd$ = fromEvent(document, 'touchend')

  touchDrag$ = this.touchStart$.pipe(
    exhaustMap(start => {
      return this.touchMove$.pipe(
        map(move => move['touches'][0].pageY - start['touches'][0].pageY),
        takeUntil(this.touchEnd$)
      )
    })
  )

  position$ = this.touchDrag$.pipe(
    startWith(0),
    map(y => y - 70)
  )
  transformPosition$ = this.position$.pipe(
    map(y => `translate3d(-35px, ${y}px, 0)`)
  )

  rotation$ = of(0)
  transformRotate$ = this.rotation$.pipe(
    map(r => `rotate(${r}deg)`)
  )

  tween(start: number, end: number, duration: number) : Observable<number> {
    return defer(() => {
      const start = Date.now();
      return interval(0, animationFrameScheduler).pipe(
        map(() => Date.now() - start)
      )
    })
  }

  ngOnInit(): void {

  }

}

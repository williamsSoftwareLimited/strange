import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, from, of, Subject } from 'rxjs';
import { catchError, delay, exhaustMap, map, share, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { slideModel } from '../slider/slider.model';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  moveSlide$ = new Subject();
  slides: slideModel[] =[]

  constructor(){
    // slide 0 at location 0 is the 'hole'
    // only slide 1 can move horizontally toward the 'hole' ie to 0
    // and slide 4 can move vetically toward the 'hole'
    for(let i=0; i<16; i++) this.slides.push({ name:i, location:i})
  }

  move(name, to){
    this.moveSlide$.next({name, to})
  }
}

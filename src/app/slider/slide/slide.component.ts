import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() src: string;
  @Input() top: number;
  @Input() left:number;

  constructor(){}

  slideStyle = { };

  ngOnInit(): void {
    this.slideStyle = { top: `${this.top}px`, left: `${this.left}px` };
  }
}

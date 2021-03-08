import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { constants } from 'buffer';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() src: string;
  @Input() location: number;
  top: number;
  left:number;
  constraints = { min: 0, max: 15, borderSize: 2, tileSize: 50, noTilesAcross: 4, noTilesDown: 4 };

  slideStyle = { };

  ngOnInit(): void {
    this.calculateLocation();
    this.slideStyle = { top: `${this.top}px`, left: `${this.left}px` };
  }

  calculateLocation(){
    if(this.location && this.location < this.constraints.min || this.location > this.constraints.max) throw("location needs to be set");

    this.left = (this.location % this.constraints.noTilesAcross) * this.constraints.tileSize + this.constraints.borderSize;
    this.top = Math.floor(this.location / this.constraints.noTilesDown) * this.constraints.tileSize + this.constraints.borderSize;
  }

}

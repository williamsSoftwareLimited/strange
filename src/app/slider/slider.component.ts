import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides = [];

  private constraints = { min: 0, max: 15, borderSize: 2, tileSize: 50, noTilesAcross: 4, noTilesDown: 4 };

  constructor() {
    for(let i = 0; i < 16; i++) this.slides.push({ name:i, location: this.getLocation(i) });
    console.log(this.slides);
  }

  ngOnInit(): void {

  }

  private getLocation(location){
    if(location && location < this.constraints.min || location > this.constraints.max) throw("location needs to be set");

    console.log("location", location);
    let left = (location % this.constraints.noTilesAcross) * this.constraints.tileSize + this.constraints.borderSize;
    let top = Math.floor(location / this.constraints.noTilesDown) * this.constraints.tileSize + this.constraints.borderSize;
    return { top: `${top}`, left: `${left}` };
  }

}

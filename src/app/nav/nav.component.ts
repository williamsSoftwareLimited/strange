import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  nav = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goto(destination){
    this.nav=destination;
    this.router.navigateByUrl(`/${destination}`);
  }

}

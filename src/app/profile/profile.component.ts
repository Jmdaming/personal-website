import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  age: number;

  constructor() { }

  ngOnInit() {
    this.age = new Date().valueOf() - new Date('1990-12-17T00:00:00.000').valueOf();
    this.age = Math.round(((this.age / 1000) / (60 * 60 * 24)) / 365.25);
  }

}

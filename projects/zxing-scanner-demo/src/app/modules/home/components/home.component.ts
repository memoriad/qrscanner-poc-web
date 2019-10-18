import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qrResultString: string;

  constructor() { }

  ngOnInit() {
    console.log('result:', history.state.data);
    this.qrResultString = history.state.data;
  }

  clearResult(): void {
    this.qrResultString = null;
  }

}

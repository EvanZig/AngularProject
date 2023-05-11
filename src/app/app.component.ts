import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  start:number = 0;
  end:number = 7;

  next7(){
    this.start+=7;
    this.end+=7;
  }

  prev7(){
    this.start-=7;
    this.end-=7;
  }

  title = 'AngularProject';
}

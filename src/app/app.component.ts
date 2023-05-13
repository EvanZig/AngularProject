import { Component } from '@angular/core';
import { calendarTasks } from './models/card-item-mock';
import { Day } from './models/card-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  start:number = 0;
  end:number = 7;
  allDays: Day[] = calendarTasks;

  next7(){
    this.start+=7;
    this.end+=7;
  }

  prev7(){
    this.start-=7;
    this.end-=7;
  }

  saveAllTasks(){
    this.allDays.forEach(day => {
      console.log(day.name);
      day.saveTasks();
    })
  }

  title = 'AngularProject';
}

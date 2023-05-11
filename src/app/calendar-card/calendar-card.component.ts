import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../models/card-item-model';
@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
})
export class CalendarCardComponent{
  @Input() day:Day;

  constructor(){
    this.day = {} as Day;
  }

  toggleTaskDone(task: any) {
    task.isChecked = !task.isChecked;
  }
  
}

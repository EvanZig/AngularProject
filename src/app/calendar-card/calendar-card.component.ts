import { Component, Input, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Day, Task } from '../models/card-item-model';
@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
})
export class CalendarCardComponent{
  @Input() day:Day;
  hiddenInput:boolean;  
  @ViewChild('newTaskInput') newTaskInput!: ElementRef;

  
  constructor(){
    this.day = {} as Day;
    this.hiddenInput = true;
  }

    addTask() {
      this.hiddenInput = false;
       setTimeout(() => {
      this.newTaskInput.nativeElement.focus();
    }, 0);
  }

  onEnterKeyPressed(){
    const newTask:Task = new Task(this.newTaskInput.nativeElement.value, false)
    this.day.tasks.push(newTask)
    this.hiddenInput = true;
    this.newTaskInput.nativeElement.value = "";
  }

  toggleTaskDone(task: any) {
    task.isChecked = !task.isChecked;
  }
  
}

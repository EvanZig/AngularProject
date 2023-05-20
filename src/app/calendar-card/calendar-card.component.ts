import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Day, Task } from '../models/card-item-model';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
})
export class CalendarCardComponent {
  @Input() day: Day;
  @ViewChild('newTaskInput') newTaskInput!: ElementRef;
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(public modalService: ModalService) {
    this.day = {} as Day;
  }

  openModal() {
    this.modalService.openModal(this.day);
        setTimeout(() => {
      this.newTaskInput.nativeElement.focus();
    }, 0);
    console.log(this.day)
  }

  closeModal() {
    this.modalService.closeModal();
  }

  addTaskToCard() {
    if (this.newTaskInput.nativeElement.value !== '') {
      const newTask: Task = new Task(this.newTaskInput.nativeElement.value, false);
      this.modalService.addTaskToDay(newTask);
    }
    this.newTaskInput.nativeElement.value = '';
    // this.closeModal();
  }

  deleteTask(task: Task) {
    this.day.tasks = this.day.tasks.filter((t) => t !== task);
  }

  toggleTaskDone(task: any) {
    task.isChecked = !task.isChecked;
  }
}

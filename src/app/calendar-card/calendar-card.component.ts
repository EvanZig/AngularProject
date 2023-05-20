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
    this.modalService.openModal();
    setTimeout(() => {
      this.newTaskInput.nativeElement.focus();
    }, 0);
  }

  closeModal() {
    this.modalService.closeModal();
  }

  addTaskToCard() {
    if (this.newTaskInput.nativeElement.value !== '') {
      const newTask: Task = new Task(this.newTaskInput.nativeElement.value, false);
      this.day.tasks.push(newTask);
      this.taskAdded.emit(newTask); // Emit the task added event
    }
    this.newTaskInput.nativeElement.value = '';
  }

  deleteTask(task: Task) {
    this.day.tasks = this.day.tasks.filter((t) => t !== task);
  }

  toggleTaskDone(task: any) {
    task.isChecked = !task.isChecked;
  }
}

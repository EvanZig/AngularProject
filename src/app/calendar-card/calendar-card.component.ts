import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Day, Task } from '../models/card-item-model';
import { ModalService } from '../modal.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
})
export class CalendarCardComponent{
  @Input() day: Day;
  @ViewChild('newTaskInput') newTaskInput!: ElementRef;
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();
  taskForm: FormGroup = this.formBuilder.group({
    newTaskInput: [''] 
  });
  

  constructor(public modalService: ModalService, private formBuilder: FormBuilder) {
    this.day = {} as Day;
  }

  openModal() {
    this.modalService.openModal(this.day);
    setTimeout(() => {
      const textarea = document.getElementById('newTaskInput') as HTMLTextAreaElement;
      textarea.focus();
    }, 0);
  }

  closeModal() {
    this.modalService.closeModal();
  }

  addTaskToCard() {
    const newTaskInputValue = this.taskForm.value.newTaskInput;
    if (newTaskInputValue && newTaskInputValue.trim() !== '') {
      const newTask: Task = new Task(newTaskInputValue.trim(), false);
      this.modalService.addTaskToDay(newTask);
    }
    this.taskForm.reset();
    this.closeModal();
  }
  

  deleteTask(task: Task) {
    this.day.tasks = this.day.tasks.filter((t) => t !== task);
  }

  toggleTaskDone(task: any) {
    task.isChecked = !task.isChecked;
  }
}

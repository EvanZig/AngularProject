import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Day,Task } from './models/card-item-model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSubject = new BehaviorSubject<boolean>(false);
  public showModal$ = this.showModalSubject.asObservable();

  private selectedDaySubject = new BehaviorSubject<Day | null>(null);
  public selectedDay$ = this.selectedDaySubject.asObservable();

  openModal(day: Day): void {
    this.selectedDaySubject.next(day);
    this.showModalSubject.next(true);
  }

  closeModal(): void {
    this.showModalSubject.next(false);
  }

  addTaskToDay(task: Task): void {
    const selectedDay = this.selectedDaySubject.getValue();
    if (selectedDay) {
      selectedDay.tasks.push(task);
    }
  }
}

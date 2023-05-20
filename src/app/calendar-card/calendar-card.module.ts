import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCardComponent } from './calendar-card.component';
import { ModalService } from '../modal.service';

@NgModule({
  declarations: [CalendarCardComponent],
  imports: [
    CommonModule
  ],
  providers: [ModalService],
  exports: [CalendarCardComponent],
})
export class CalendarCardModule { }

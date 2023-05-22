import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCardComponent } from './calendar-card.component';
import { ModalService } from '../modal.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalendarCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ModalService],
  exports: [CalendarCardComponent],
})
export class CalendarCardModule { }

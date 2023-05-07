import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCardComponent } from './calendar-card.component';


@NgModule({
  declarations: [CalendarCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CalendarCardComponent],
})
export class CalendarCardModule { }

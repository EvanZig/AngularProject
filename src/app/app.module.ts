import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarCardModule } from './calendar-card/calendar-card.module';
import { NavbarModule } from './navbar/navbar.module';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarCardModule,
    NavbarModule
  ],
  providers: [ModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

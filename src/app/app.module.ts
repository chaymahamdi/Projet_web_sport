import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/home/home.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ProfilComponent } from './dashboard/profil/profil.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { Footer1Component } from './shared/footer1/footer1.component';
import { Footer2Component } from './shared/footer2/footer2.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AllEventsComponent } from './core/all-events/all-events.component';
import { AddEventComponent } from './dashboard/add-event/add-event.component';
import { FullCalendarModule } from '@fullcalendar/angular';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CalendarComponent,
    AdminComponent,
    ProfilComponent,
    ContactComponent,
    Footer1Component,
    Footer2Component,
    HeaderComponent,
    NavbarComponent,
    AllEventsComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


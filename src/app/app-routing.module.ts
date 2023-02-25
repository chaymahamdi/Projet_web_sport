import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { HomeComponent } from './core/home/home.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { ProfilComponent } from './dashboard/profil/profil.component';
import { AllEventsComponent } from './core/all-events/all-events.component';
import { AddEventComponent } from './dashboard/add-event/add-event.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'events', component: AllEventsComponent },
  { path: 'Addevent', component: AddEventComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

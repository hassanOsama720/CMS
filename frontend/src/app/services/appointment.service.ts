import { Inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(public http: HttpClient, @Inject("baseURL") public baseURL:string) {
    this.baseURL += "appointments/"
   }

  
  getAppointments()
  {
    return this.http.get<Appointment[]>(this.baseURL)
  }

  addAppointment(appointment:Appointment|null)
  {
    return this.http.post<Appointment>(this.baseURL,appointment);
  }

  deleteAppointment(id:Number)
  {
    return this.http.delete<Appointment>(this.baseURL+id)
  }
}

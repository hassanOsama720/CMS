import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(public appointmentService:AppointmentService) { }

  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(
     
      data=> {
        this.appointments = data 
        console.log("fkn array: ",this.appointments)
      }
    )
  }

  load(){
    this.appointmentService.getAppointments().subscribe(
      data=>this.appointments = data 
    )
  }

  deleteAppointment(id:Number)
  {
    this.appointmentService.deleteAppointment(id).subscribe(data => {
      console.log(data);
      this.load();
   
    }) ; 
  }

}

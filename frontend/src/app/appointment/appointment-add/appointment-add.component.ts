import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { PatientService } from 'src/app/patient.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Doctor } from 'src/app/_models/doctor';
import { Patient } from 'src/app/_models/patient';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {

  appointment: Appointment | null = null;
  constructor(public appointmentService: AppointmentService, public router: Router,
     public patientService:PatientService, public doctorService:DoctorsService) { }
  _id: any = null;
  patientId: any = null;
  doctorId: any = null;
  time: any = null;
  patients:Patient[] = []; 
  doctors:Doctor[] = [];
  status = "pending";

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data=>this.patients=data);
    this.doctorService.getAllDoctors().subscribe(data=>this.doctors=data);

  }

  save() {
    console.log("patientId", this.patientId);
    console.log("doctorId", this.doctorId);
    console.log("doctors", this.doctors)
    this.appointment = { _id: this._id, patientId: this.patientId, doctorId: this.doctorId, time: this.time, status: this.status };
    console.log(this.appointment);
    this.appointmentService.addAppointment(this.appointment).subscribe(a => { console.log(a); this.router.navigateByUrl("/appointments") });
  }

}

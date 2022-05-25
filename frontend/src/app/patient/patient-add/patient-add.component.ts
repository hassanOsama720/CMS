import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient.service';
import { Patient } from 'src/app/_models/patient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  idCounter: number = 0;
  counterId() {
    return this.idCounter++;
  }
  patient:Patient = new Patient(this.idCounter,'','',false,10,'','Male');

  addPatient() {
    this.patientService.addPatient(this.patient).subscribe(a=>console.log(a));
    this.router.navigate(['/patients']);

  }


  constructor(public patientService:PatientService, public router: Router) { }

  ngOnInit(): void {
  }

}

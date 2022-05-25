import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient.service';
import { Patient } from 'src/app/_models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  searchValue:string ='';
  patient:Patient[] | null = null ;

  load(){
    this.patientService.getAllPatient().subscribe(patient => this.patient = patient);
    console.log(this.patient);
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => console.log(data)) ;
    this.load();
  }

  constructor(public patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(patient => this.patient = patient);
  }

}

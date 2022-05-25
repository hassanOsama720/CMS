import { Component,Input ,OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient.service';
import { Patient } from 'src/app/_models/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input() id: number = -1;

  patient: Patient | null = new Patient(0,'','',false,10,'','');

  display: boolean = false;

  showDialog() {
    this.display = true;
  }


  showPatient() {
    this.display = true;
    this.patientService.getPatientById(this.id).subscribe((data) => {
      this.patient = data;
    });

  }


  constructor(public patientService:PatientService) { }

  ngOnInit(): void {
  }

}

import { Component, Input,OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient.service';
import { Patient } from 'src/app/_models/patient';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  @Input() id:number = -1;

  patient:Patient = new Patient(0,'','',false,10,'','');
  display: boolean = false;

  editPatient()
  {
    this.display = true;
    this.patientService.getPatientById(this.id).subscribe((data) => {
      this.patient = data;
    });
  }

  updatePatient()
  {
    this.patientService.setPatientById(this.id,this.patient).subscribe(
      data=>console.log(data)
      );
    this.display = false;
  }



  constructor(public patientService:PatientService ) { }

  ngOnInit(): void {
  }

}

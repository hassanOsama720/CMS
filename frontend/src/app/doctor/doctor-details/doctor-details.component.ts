import { Component, Input, OnInit ,OnChanges,SimpleChanges} from '@angular/core';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorsService } from 'src/app/services/doctors.service';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  constructor(public DoctorsService:DoctorsService) { }
  @Input() id:number = -1;

  doctor:Doctor|null = new Doctor(0, '', '','' ,'', '',);

  ngOnInit(): void {
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  showDoctor()
  {

    this.display = true;

    this.DoctorsService.getDoctorById(this.id).subscribe((data) => {
      this.doctor = data;

    });
  }
}

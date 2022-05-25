import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  query: string = '';
  showAndHideImage: boolean = true;

  constructor(public DoctorsService: DoctorsService) {}
  doctors:Doctor[] | null = null ;
  sub:Subscription|null=null;
  doctorDetails = 0;
  doctoredit = 0;

  ngOnInit(): void {
  this.load();
}

load(){
  this.DoctorsService.getAllDoctors().subscribe(doctors => this.doctors = doctors);
  console.log(this.doctors);
}
deleteDoctor(id: number) {
  this.DoctorsService.deleteDoctor(id).subscribe(data => console.log(data)) ;
  this.load();
}

  toggleImage(target: any) {
    target.textContent = this.showAndHideImage ? 'Show Image' : 'Hide Image';
    this.showAndHideImage = !this.showAndHideImage;
  }
}

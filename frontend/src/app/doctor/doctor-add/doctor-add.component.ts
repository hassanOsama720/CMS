import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  idCounter: number = 1;
  doctor = new Doctor(this.idCounter, '','','', '', '2020.jpg');

  updateFlag: boolean = false;
  detailsFlag: boolean = false;
  updateIndex: number = -1;
  showImageFlag: boolean = true;
  rating: number = 5 ;
  add:boolean = false;
  file:any;

  onFileChange(s:any){
      this.file=s.target.files[0];
  }
  showAdd()
  {
    this.add = true ;
  }

  incrementId() {
    return this.idCounter++;
  }


  addDoctor() {

    this.DoctorsService.addDoctor(this.doctor,this.file).subscribe(
      data=>console.log(data)) ;
      this.router.navigate(['/doctors']);
     ;
  }


  constructor(public DoctorsService:DoctorsService, public router: Router) { }

  ngOnInit(): void {
  }

}

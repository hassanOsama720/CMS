import { Component, OnInit,Input, OnChanges,  SimpleChanges} from '@angular/core';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorsService } from 'src/app/services/doctors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  updateFlag: boolean = false;
  updateIndex: number = -1;
  @Input() id:number = -1;

  doctor:Doctor = new Doctor(0, '','', '', '', '');
  display: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    // if (!changes['Id'].isFirstChange()) {
    //   this.DoctorsService.getDoctorById(this.id).subscribe((data) => {
    //     this.speaker = data;
    //   });
    // }
  }

  editDoctor()
  {
    this.display = true;
    this.DoctorsService.getDoctorById(this.id).subscribe((data) => {
      this.doctor = data;
    });  }

  updateDoctor()
  {
    console.log(this.doctor);
    this.DoctorsService.setDoctorById(this.id,this.doctor).subscribe(data=>console.log(data));
    this.display = false;


    }
  cancelUpdate() {
    this.updateFlag = false;
    this.doctor = {
      _id: 1,
      name: '',
      phone: '01',
      age:'',
      spec:'',
      image: 'new'

    };
  }
  constructor(public DoctorsService:DoctorsService, public acroute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.acroute.params.subscribe((data) => {
    //   this.DoctorsService.getDoctorById(data['id']).subscribe((dataa) => {
    //     this.doctor = dataa;
    //   });
    // });
  }

}

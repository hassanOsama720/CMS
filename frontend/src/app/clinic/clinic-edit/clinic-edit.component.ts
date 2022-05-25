import { Component, OnInit,Input, OnChanges,  SimpleChanges} from '@angular/core';
import { Clinic } from 'src/app/_models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorsService } from 'src/app/doctors.service';

@Component({
  selector: 'app-clinic-edit',
  templateUrl: './clinic-edit.component.html',
  styleUrls: ['./clinic-edit.component.css']
})
export class ClinicEditComponent implements OnInit {
  updateFlag: boolean = false;
  updateIndex: number = -1;
  @Input() id:number = -1;

  clinic:Clinic = new Clinic(0, '','', '');
  display: boolean = false;
  doctors:Doctor[] = []; 
  doctorId: any = null;
  ngOnChanges(changes: SimpleChanges): void {
    // if (!changes['Id'].isFirstChange()) {
    //   this.DoctorsService.getDoctorById(this.id).subscribe((data) => {
    //     this.speaker = data;
    //   });
    // }
  }

  editClinic()
  {
    this.display = true;
    this.ClinicService.getClinicById(this.id).subscribe((data) => {
      this.clinic = data;
    });  }

  updateClinic()
  {
    this.clinic.doctor=this.doctorId
    this.ClinicService.setClinicById(this.id,this.clinic).subscribe(data=>console.log(data));
    this.display = false;
    }
  cancelUpdate() {
    this.updateFlag = false;
    this.clinic = {
      _id:0,
      name: '',
      address:"A",
      doctor:"A"
      
    };
  }
  constructor(public ClinicService:ClinicService, public doctorService:DoctorsService,public acroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(data=>this.doctors=data);
    // this.acroute.params.subscribe((data) => {
    //   this.DoctorsService.getDoctorById(data['id']).subscribe((dataa) => {
    //     this.doctor = dataa;
    //   });
    // });
  }

}

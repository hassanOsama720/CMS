import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Medicine } from '../medicine';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MedicineService } from '../medicine.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit,OnChanges,AfterViewInit {
  public dataSource = new MatTableDataSource<Medicine>();

  medicine_add:Medicine = {
    _id:1,
      comercial_name:"Calcijex",
      medical_name:"Calcitriol",
      price:10,
      image:"../../../assets/img/logo.jpg",
      manufacturer:"icvkecve",
      type:"tablet",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
  }
  info:Medicine = {
    _id:1,
      comercial_name:"Calcijex",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
  }
  medicine_list:Medicine[]=[]
  displayedColumns: string[] = ['ID', 'cname', 'mname', 'price','manufacturer','type','operations'];
  add_display = "none"
  info_display = "none"
  add_open(){
    this.add_display = "flex"
  }
  add_close(){
    this.add_display = "none"
  };
  info_open(){
    this.info_display = "flex"
  }
  info_close(){
    this.info_display = "none"
  };
  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  add_new(){
      this.service.addMedicine(this.medicine_add).subscribe(a=>console.log(a))
    this.add_display = "none"
    window.location.reload();
  };
  update_one(){
    this.service.updateMedicine(this.medicine_add).subscribe(a=>console.log(a))
    this.add_display = "none"
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/medicine']);
  });
}
  open_update(
    _id:number,
    comercial_name:string,
    medical_name:string,
    manufacturer:string,
    price:number,
    image:string,
    type:string,
    side_effects:any,
    description:string
    ){
      this.medicine_add._id=_id
      this.medicine_add.comercial_name=comercial_name
      this.medicine_add.medical_name=medical_name
      this.medicine_add.manufacturer=manufacturer
      this.medicine_add.price=price
      this.medicine_add.image=image
      this.medicine_add.type=type
      this.medicine_add.side_effects=side_effects
      this.medicine_add.description=description
      this.add_display="flex"
      
  }
  show_info(
    _id:number,
    comercial_name:string,
    medical_name:string,
    manufacturer:string,
    price:number,
    image:string,
    type:string,
    side_effects:any,
    description:string
    ){
      this.info._id=_id
      this.info.comercial_name=comercial_name
      this.info.medical_name=medical_name
      this.info.manufacturer=manufacturer
      this.info.price=price
      this.info.image=image
      this.info.type=type
      this.info.side_effects=side_effects
      this.info.description=description
      this.info_open()
      
  }
  delete_one(_id:number){
    this.service.delMedicine(_id).subscribe(a=>console.log(a))
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/medicine']);
  });
  }
  public doFilter = (e:any) => {
    this.dataSource.filter = e.target.value.trim().toLocaleLowerCase();
  }

  constructor(public service:MedicineService,public router:Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.service.getAllMedicines().subscribe(a=>this.dataSource.data = a as Medicine[])
  }

  ngOnInit(): void {
    this.service.getAllMedicines().subscribe(a=>this.dataSource.data = a as Medicine[])
  }

}

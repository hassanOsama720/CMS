import { Inject ,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  // baseUrl:string = "http://localhost:8080/patients/";

  private patients:Patient[]=[];


  // addPatient(patient:Patient, file:File){
  //   let frm:FormData=new FormData();
  //   frm.append("_id",patient._id.toString());
  //   frm.append("name",patient.name);
  //   frm.append("phoneNumber" ,patient.phoneNumber);
  //   // frm.append("isMarried",patient.isMarried.valueOf);
  //   frm.append("age",patient.age.toString());
  //   frm.append("address",patient.address);
  //   frm.append("gender",patient.gender);
  //   frm.append("image",file,file.name);
  //   return this.http.post<Patient>(this.baseURL,frm);

  // }

  getAllPatient(){
    return this.http.get<Patient[]>(this.baseURL);
  }

  getPatientById(id:number){
    return this.http.get<Patient>(this.baseURL+id);
  }

  addPatient(patient:Patient){
    return this.http.post<Patient>(this.baseURL,patient);
  }

  setPatientById(id:number ,patient:Patient){
    return this.http.put<Patient>(this.baseURL,patient)
  }

  deletePatient(_id:number){
    return this.http.request('delete',this.baseURL,{body:{_id}})
  }

  constructor(public http:HttpClient , @Inject('baseURL') public baseURL:string) {
    this.baseURL+="patients/"
  }
}

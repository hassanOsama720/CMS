import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private medicines:Medicine[]=[
  ];
 
  getAllMedicines(){
    return this.http.get<Medicine[]>("http://localhost:8080/medicine")

  }
  addMedicine(new_Medicine:Medicine){
    return this.http.post<Medicine>("http://localhost:8080/medicine",new_Medicine)
  }
  getMedicineById(id:number)
  {
      return this.http.get<Medicine>("http://localhost:8080/medicine/"+id)
  }
  updateMedicine(new_Medicine:Medicine){
    return this.http.put<Medicine>("http://localhost:8080/medicine",new_Medicine);
  }
  delMedicine(id:number){
    return this.http.delete("http://localhost:8080/medicine/"+id);
  }
  constructor(public http:HttpClient) { }
}

import { Injectable } from '@angular/core';
import { Prescription } from './../_models/prescription';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private Prescriptions: Prescription[] = [];

  getAllPrescriptions() {
    return this.http.get<Prescription[]>('http://localhost:8080/prescriptions');
  }
  addPrescription(new_prescription: Prescription) {
    return this.http.post<Prescription>(
      'http://localhost:8080/prescriptions',
      new_prescription
    );
  }
  getPrescriptionById(id: number) {
    return this.http.get<Prescription>(
      'http://localhost:8080/prescriptions/' + id
    );
  }
  updatePrescription(new_prescription: Prescription) {
    return this.http.put<Prescription>(
      'http://localhost:8080/prescriptions',
      new_prescription
    );
  }
  delPrescription(id: number) {
    return this.http.delete('http://localhost:8080/prescriptions/' + id);
  }

  constructor(public http: HttpClient) {}
}

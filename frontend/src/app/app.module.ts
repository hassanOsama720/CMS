import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { MedicineModule } from './medicine/medicine.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { RouterModule } from '@angular/router';

import { PrescriptionModule } from '../app/prescription/prescription.module';
import { LoginComponent } from './login/login.component';
import { ClinicModule } from './clinic/clinic.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, LoginComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PrescriptionModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    ImageModule,
    CheckboxModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    NgbModule,
    MedicineModule,
    AppointmentModule,
    PatientModule,
    DoctorModule,
    RouterModule,
    CardModule,
    InputTextModule,
    ClinicModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,multi:true},
    { provide: 'baseURL', useValue: 'http://localhost:8080/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

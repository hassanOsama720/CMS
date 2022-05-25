import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionListComponent } from './prescription/prescription-list/prescription-list.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AppointmentTableComponent } from './appointment/appointment-table/appointment-table.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { MedicineModule } from './medicine/medicine.module';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';

import { AppointmentAddComponent } from './appointment/appointment-add/appointment-add.component';

import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { LoginComponent } from './login/login.component';

import { ClinicListComponent } from './clinic/clinic-list/clinic-list.component';
import { ClinicAddComponent } from './clinic/clinic-add/clinic-add.component';
import { ClinicEditComponent } from './clinic/clinic-edit/clinic-edit.component';
import { ClinicDetailsComponent } from './clinic/clinic-details/clinic-details.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointments', component: AppointmentListComponent , canActivate:[LoginGuard] },
  { path: 'appointments/add', component: AppointmentAddComponent , canActivate:[LoginGuard]},
  { path: 'medicine', component: MedicineListComponent, canActivate:[LoginGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'doctors',
    component: DoctorListComponent,
    canActivate:[LoginGuard],
    children: [
      { path: 'details/:id', component: DoctorDetailsComponent },
      { path: 'edit/:id', component: DoctorEditComponent },
    ],
  },
  { path: 'patients/add', component: PatientAddComponent , canActivate:[LoginGuard]},
  {
    path: 'patients',
    component: PatientListComponent,
    canActivate:[LoginGuard],
    children: [
      { path: 'details/:id', component: PatientDetailsComponent },
      { path: 'edit/:id', component: PatientEditComponent },
    ],
  },
  { path: 'prescription', component: PrescriptionListComponent, canActivate:[LoginGuard] },
  { path: 'doctors/add', component: DoctorAddComponent, canActivate:[LoginGuard] },
  {path:"clinics",component:ClinicListComponent,canActivate:[LoginGuard],children:
  [
    {path:"details/:id",component:ClinicDetailsComponent},
    {path:"edit/:id",component:ClinicEditComponent},
  ]},
  {path:"clinics/add",component:ClinicAddComponent , canActivate:[LoginGuard]},
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

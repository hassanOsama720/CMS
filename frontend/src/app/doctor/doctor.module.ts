import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { FormsModule } from '@angular/forms';
import { ArraySplicePipe } from '../array-splice.pipe';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ImageModule} from 'primeng/image';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DoctorAddComponent,
    DoctorDetailsComponent,
    DoctorListComponent,
    DoctorEditComponent,
    ArraySplicePipe

  ],
  imports: [
    CommonModule,FormsModule
    ,CheckboxModule,ImageModule,DialogModule,ButtonModule,
    RouterModule
  
  ],
  exports: [
    DoctorAddComponent,
    DoctorDetailsComponent,
    DoctorListComponent,
    DoctorEditComponent
  ],
})
export class DoctorModule { }

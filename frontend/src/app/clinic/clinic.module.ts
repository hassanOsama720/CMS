import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicAddComponent } from './clinic-add/clinic-add.component';
import { ClinicEditComponent } from './clinic-edit/clinic-edit.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ImageModule} from 'primeng/image';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ClinicAddComponent,
    ClinicDetailsComponent,
    ClinicListComponent,
    ClinicEditComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,CheckboxModule,ImageModule,
    DialogModule,ButtonModule
  ],
  exports:[
    ClinicAddComponent,
    ClinicDetailsComponent,
    ClinicListComponent,
    ClinicEditComponent
  ]
})
export class ClinicModule { }

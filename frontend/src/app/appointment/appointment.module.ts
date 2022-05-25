import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [AppointmentTableComponent, AppointmentListComponent, AppointmentAddComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    DropdownModule
  ],
  exports: [
    AppointmentTableComponent
  ]
})
export class AppointmentModule { }

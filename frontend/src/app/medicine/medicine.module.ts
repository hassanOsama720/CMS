import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    MedicineListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  exports:[
    MedicineListComponent
  ]
})
export class MedicineModule { }

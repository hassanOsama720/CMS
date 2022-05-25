import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
// import { PrescriptionEditComponent } from './prescription-edit/prescription-edit.component';
// import { PrescriptionDeleteComponent } from './prescription-delete/prescription-delete.component';
// import { PrescriptionDetailesComponent } from './prescription-detailes/prescription-detailes.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    // PrescriptionAddComponent,
    // PrescriptionEditComponent,
    // PrescriptionDeleteComponent,
    // PrescriptionDetailesComponent,
    PrescriptionListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    ImageModule,
    DialogModule,
    ButtonModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
  ],
})
export class PrescriptionModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule],
  exports: [MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule],
})
export class MaterialModule { }

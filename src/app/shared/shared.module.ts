import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  declarations: []
})
export class SharedModule { }

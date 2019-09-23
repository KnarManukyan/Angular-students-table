import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentGenericFormComponent} from '../forms/student-generic-form/student-generic-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';



@NgModule({
  declarations: [
    StudentGenericFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    StudentGenericFormComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }

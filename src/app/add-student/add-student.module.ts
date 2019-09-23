import { NgModule } from '@angular/core';

import { AddStudentComponent } from './add-student.component';
import {SharedModule} from '../shared/shared.module';
import {AddStudentRoutingModule} from './add-student-routing.module';


@NgModule({
  declarations: [
    AddStudentComponent
  ],
  imports: [
    AddStudentRoutingModule,
    SharedModule
  ]
})
export class AddStudentModule { }

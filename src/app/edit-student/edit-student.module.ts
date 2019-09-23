import { NgModule } from '@angular/core';
import { EditStudentComponent } from './edit-student.component';
import {SharedModule} from '../shared/shared.module';
import {EditStudentRoutingModule} from './edit-student-routing.module';


@NgModule({
  declarations: [
    EditStudentComponent
  ],
  imports: [
    EditStudentRoutingModule,
    SharedModule
  ]
})
export class EditStudentModule { }

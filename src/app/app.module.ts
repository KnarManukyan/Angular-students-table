import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent} from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentService } from './student.service';
import { AppRoutingModule} from './app-routing.module';
import { AddStudentFormComponent} from './forms/add-Student-form.component';
import { StudentGenericFormComponent } from './forms/student-generic-form/student-generic-form.component';
import { EditStudentFormComponent } from './forms/edit-Student-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PageNotFoundComponent,
    AddStudentFormComponent,
    EditStudentFormComponent,
    StudentGenericFormComponent,
    DialogExampleComponent
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddStudentFormComponent } from './forms/add-Student-form.component';
import { EditStudentFormComponent } from './forms/edit-Student-form.component';

const appRoutes: Routes = [
  { path: 'editStudent/:id', component: EditStudentFormComponent },
  { path: 'students', component: StudentComponent },
  { path: 'addStudent', component: AddStudentFormComponent },
  { path: '',   redirectTo: '/students', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'add-student', loadChildren: () => import('./add-student/add-student.module').then(m => m.AddStudentModule) },
  { path: 'edit-student/:id', loadChildren: () => import('./edit-student/edit-student.module').then(m => m.EditStudentModule) },
  { path: '',   redirectTo: '/students', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
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

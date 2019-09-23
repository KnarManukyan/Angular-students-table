import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import {Student} from '../Student';
@Component({
  selector: 'app-edit-student-form',
  template: `<app-student-generic-form (submitFunction)="submit($event)" [student] = "student" [errorMessage]="errorMessage" [text]="'Edit Student'" [type]="'edit'"></app-student-generic-form>`
})
export class EditStudentFormComponent implements OnInit {
  student: Student;
  oldId: number;
  errorMessage: string;

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent(): void {
    this.oldId = +this.route.snapshot.paramMap.get('id');
    this.student = this.studentService.getStudent(this.oldId);
  }

  submit(data) {
    this.errorMessage = this.studentService.setStudent(this.oldId, data);
  }
}

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-add-student',
  template: `<app-student-generic-form (submitFunction)="submit($event)" [errorMessage] = "errorMessage" [text] = "'Add Student'" [type] = "'add'"></app-student-generic-form>`
})
export class AddStudentComponent implements OnInit {
  constructor(private studentService: StudentService) { }
  errorMessage: string;

  ngOnInit() {
  }

  submit(data) {
    const message = this.studentService.addStudent(data);
    this.errorMessage = message;
  }
}

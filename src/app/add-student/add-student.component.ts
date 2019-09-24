import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
})
export class AddStudentComponent implements OnInit {
  errorMessage: string;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  OnSubmit(data) {
    const message = this.studentService.addStudent(data);
    this.errorMessage = message;
  }
}

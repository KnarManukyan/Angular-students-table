import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import {Student} from '../Student';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
})
export class EditStudentComponent implements OnInit {
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

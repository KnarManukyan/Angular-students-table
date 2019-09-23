import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [Student]
})
export class StudentComponent implements OnInit {
  students: Map<number, Student>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'delete'];
  constructor(private studentService: StudentService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getStudents();
    this.mapToArray();
  }
  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  mapToArray(): Array<Student> {
    return Array.from(this.students.values());
  }

  deleteStudent(id) {
    this.studentService.deleteStudent(id);
  }

  openDialog(student: Student) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogComponent, {data: student});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.deleteStudent(student.id);
      }
    });
  }
}

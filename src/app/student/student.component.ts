import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Dialog} from './dialog';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [Student]
})
export class StudentComponent implements OnInit {
  students: Map<number, Student>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'delete'];
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

  delete(id) {
    this.studentService.deleteStudent(id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(Dialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    })
  }
}



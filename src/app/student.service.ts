import { Injectable } from '@angular/core';
import { Student } from './Student';
import { Router } from '@angular/router';
import { validate } from './Validation';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Map<number, Student>;
  constructor(private router: Router) {
    this.students = new Map<number, Student>();
    this.students.set(111111, new Student(111111, 'Knarik', 'Manukyan', 'knarmanukyan23@gmail.com', '077283264', 'dgbndgknh', 19));
    this.students.set(222222, new Student(222222, 'Nare', 'Manukyan', 'knarmanukyan23@gmail.com', '077283264', 'dgbndgknh', 19));
  }
  getStudents(): Map<number, Student> {
    return this.students;
  }
  getStudent(id: number): Student {
    return this.students.get(id);
  }
  addStudent(data): string {
    data.id = Number(data.id);
    data.age = Number(data.age);
    const message: string = validate(data, this.students);
    if (this.students.has(data.id)) {
      return 'There is another person with this id';
    }
    if (message === 'valid') {
      this.addOrEditStudent(data);
    }
    return message;
  }
  setStudent(oldID, data): string {
    data.id = Number(data.id);
    data.age = Number(data.age);
    const message: string = validate(data, this.students);
    if (message === 'valid') {
      this.students.delete(oldID);
      this.addOrEditStudent(data);
    }
    return message;
  }
  addOrEditStudent(data) {
    this.students.set(data.id, new Student(data.id, data.firstName, data.lastName, data.email, data.phone, data.note, data.age));
    this.router.navigate(['/students']);
  }
  deleteStudent(id: number): void {
    this.students.delete(id);
  }
}


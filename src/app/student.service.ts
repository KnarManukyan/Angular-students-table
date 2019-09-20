import { Injectable } from '@angular/core';
import { Student } from './Student';
import {Observable, of} from 'rxjs';
import {validate} from './Validation';

@Injectable()
export class StudentService {
  students: Map<number, Student>;
  constructor() {
    this.students = new Map<number, Student>();
    this.students.set(1, new Student(1, 'Knarik', 'Manukyan', 'knarmanukyan23@gmail.com', '077283264', 'dgbndgknh', 19));
    this.students.set(2, new Student(2, 'Nare', 'Manukyan', 'knarmanukyan23@gmail.com', '077283264', 'dgbndgknh', 19));
  }
  getStudents(): Map<number, Student> {
    return this.students;
  }
  getStudent(id: number): Student {
    return this.students.get(id);
  }
  hasStudent(id: number): boolean {
    return this.students.has(id);
  }
  addStudent(data): string {
    const message: string = validate(data, this.students);
    if (message === 'valid') {
      this.students.set(data.id, new Student(data.id, data.firstName, data.lastName, data.email, data.phone, data.note, data.age));
    }
    return message;
  }
  setStudent(oldID, data): string {
    const message: string = validate(data, this.students);
    if (message === 'valid') {
      this.students.delete(oldID);
      this.students.set(data.id, new Student(data.id, data.firstName, data.lastName, data.email, data.phone, data.note, data.age));
    }
    return message;
  }
  deleteStudent(id: number): void {
    this.students.delete(id);
  }
}


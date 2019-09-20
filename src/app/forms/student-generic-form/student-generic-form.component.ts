import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { StudentService } from '../../student.service';
import {Student} from '../../Student';
@Component({
  selector: 'app-student-generic-form',
  templateUrl: './student-generic-form.component.html',
  styleUrls: ['./student-generic-form.component.css']
})
export class StudentGenericFormComponent implements OnInit {
  @Output() submitFunction: EventEmitter<any> = new EventEmitter();
  @Input() errorMessage: string;
  @Input() student: Student = null;
  @Input() text: String;
  profileForm = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    note: new FormControl(''),
    age: new FormControl('', Validators.required)
  });
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    console.log(this.errorMessage);
    if (this.student) {
      this.profileForm.controls.id.setValue(this.student.id);
      this.profileForm.controls.firstName.setValue(this.student.firstName);
      this.profileForm.controls.lastName.setValue(this.student.lastName);
      this.profileForm.controls.email.setValue(this.student.email);
      this.profileForm.controls.phone.setValue(this.student.phone);
      this.profileForm.controls.note.setValue(this.student.note);
      this.profileForm.controls.age.setValue(this.student.age);
    }
  }
  onSubmit() {
    console.log(this.submitFunction);
    this.submitFunction.emit(this.profileForm.value);
  }
}

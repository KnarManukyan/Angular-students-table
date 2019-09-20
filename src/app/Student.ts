import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Student {
  constructor(public id: number, public  firstName: string, public  lastName: string, public  email: string, public phone: string, public  note: string, public age: number) {
  }
}

import {Student} from './Student';

export function validate(data: Student, map: Map<number, Student>): string {
    const id: number = data.id;
    const firstName: string = data.firstName;
    const lastName: string = data.lastName;
    const email: string = data.email;
    const phone: string = data.phone;
    const note: string = data.note;
    const age: number = data.age;
    if (isNaN(id)) { return('Id must contain only digits');
    } else if (id.toString().length !== 6) { return('Id has to be a 6 digit number');
    } else if (!(/^[+]*[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/.test(phone) || /^[+]*[(][0-9]{3}[)][-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/.test(phone))) { return('Phone is not valid');
    } else if (!/\S+@\S+\.\S/.test(email)) { return('Email is not valid');
    } else if (isNaN(age)) { return('Age must contain only digits');
    } else { return 'valid'; }
  }



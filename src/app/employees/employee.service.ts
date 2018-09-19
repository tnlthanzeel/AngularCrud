import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.models';

@Injectable()
// {
// providedIn: 'root'
// }
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 3,
      name: 'thanzeel',
      gender: 'male',
      email: 'tnlthazeel@gmail.com',
      phoneNumber: 94772522552,
      contactPreference: 'phone',
      dateOfBirth: new Date('12/18/1991'),
      department: 'SW',
      isActive: true,
      photoPath:
        'https://lh3.googleusercontent.com/-fxs_9FvPsUQ/AAAAAAAAAAI/AAAAAAAABOM/nJFhfJlJVzA/s640-il/photo.jpg',
      password: null,
      confirmPassword: null
    },

    {
      id: 4,
      name: 'akmal',
      gender: 'male',
      email: 'akmal@gmail.com',
      phoneNumber: 94777123490,
      contactPreference: 'phone',
      dateOfBirth: new Date('08/03/1995'),
      department: 'SW',
      isActive: true,
      photoPath:
        'https://lh3.googleusercontent.com/-fxs_9FvPsUQ/AAAAAAAAAAI/AAAAAAAABOM/nJFhfJlJVzA/s640-il/photo.jpg',
      password: null,
      confirmPassword: null
    }
  ];
  constructor() {}

  public getAllEmployees(): Employee[] {
    return this.employees;
  }

  public getEmployeeById(id: number): Employee {
    return this.employees.find(x => x.id === id);
  }

  public save(employee: Employee): void {
    this.employees.push(employee);
  }
}

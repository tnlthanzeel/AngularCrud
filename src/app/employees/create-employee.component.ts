import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm')
  public createEmployeeForm: NgForm;

  previewPhoto = false;
  // gender = 'male'; //select radio button by default
  // isActive = true; //to check the checkbox by default
  department = '2';
  dateOfBirth = new Date(2018, 0, 30); // setting the default date

  datepickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    email: null,
    phoneNumber: null,
    dateOfBirth: null,
    department: 'select',
    isActive: true,
    photoPath: null,
    password: null,
    confirmPassword: null
  };

  departments: Department[] = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Accounts' },
    { id: 3, name: 'Software' }
  ];

  constructor(
    private _employeeService: EmployeeService,
    private _route: Router
  ) {
    this.datepickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: false,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {}

  public saveEmployee(newEmployeeForm: NgForm): void {
    // console.log(data); //prints the entire property of the form
    const newEmployeeObj: Employee = Object.assign({}, this.employee);
    this._employeeService.save(newEmployeeObj);
    newEmployeeForm.reset();
    this._route.navigate(['list']);
  }
}

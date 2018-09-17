import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';
import { EmployeeService } from 'src/app/employees/employee.service';

@Component({
  // selector: 'app-list-employee', becouse its defined in routes
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[];
  arrayIndex = 1;
  employeeToDisplay: Employee;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getAllEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  getNextEmployee(): void {
    if (this.arrayIndex <= 1) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }
}

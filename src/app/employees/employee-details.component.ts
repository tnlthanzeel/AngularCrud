import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  private _id: number;
  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.paramMap.subscribe(param => {
      this._id = +param.get('id'); // + is used to convert the id parameter to number type
      this.employee = this._employeeService.getEmployeeById(this._id);
    });
  }

   viewNextEmployee() {
    if (this._id < 4) {
      this._id++;
    } else {
      this._id = 3;
    }
    this._router.navigate(['/employees', this._id]);
  }
}

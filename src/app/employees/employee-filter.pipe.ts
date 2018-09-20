import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.models';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: Employee[], searchTerm: string): Employee[]  {
    if (!employees || !searchTerm) {
      return employees;
    }
    return employees.filter(
      employee =>
        employee.name
          .toLocaleLowerCase()
          .indexOf(searchTerm.toLocaleLowerCase()) !== -1
    );
  }
}

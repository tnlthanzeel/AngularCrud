import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { FormsModule } from '@angular/forms';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateCanDeactivateGuardService } from './employees/create-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeeComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  {
    path: 'create',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateCanDeactivateGuardService]
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}

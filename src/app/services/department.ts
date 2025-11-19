import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../store/employeemodel';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  private apiUrl = 'https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee';

  addemp(employeeModel: Omit<EmployeeModel, "employeeId">) {
    return this.http.post<EmployeeModel>(this.apiUrl, employeeModel);
  }

  constructor(private http: HttpClient) {

  }

  getDepartment() {
    return this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments')
  }
}

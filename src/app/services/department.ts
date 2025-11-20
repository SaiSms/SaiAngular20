import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../store/employeemodel';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  private apiUrl = 'https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee';
  private base = `${environment.apiUrl}/employees`;

  addemp(employeeModel: Omit<EmployeeModel, "employeeId">) {
    return this.http.post<EmployeeModel>(this.base, employeeModel);
    // return this.http.post<EmployeeModel>(this.apiUrl, employeeModel);
  }

  create(emp: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.base, emp);
  }

  constructor(private http: HttpClient) {

  }

  getDepartment() {
    return this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments')
  }
}

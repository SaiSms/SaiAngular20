import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { EmployeeModel } from '../store/employeemodel';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private base = `${environment.apiUrl}/employees`;

  constructor(private http: HttpClient) {}

  create(emp: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.base, emp);
  }

  getById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.base}/${id}`);
  }

  list(page = 0, size = 20): Observable<any> {
    return this.http.get<any>(`${this.base}?page=${page}&size=${size}`);
  }

  update(id: number, emp: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(`${this.base}/${id}`, emp);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}

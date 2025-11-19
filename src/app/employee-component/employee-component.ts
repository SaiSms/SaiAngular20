import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EmployeeModel } from '../store/employeemodel';
import { Observable } from 'rxjs';
import { addEmp, addEmpSuccess } from '../store/action';

@Component({
  selector: 'app-employee-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.scss',
})
export class EmployeeComponent implements OnInit {

  private store = inject(Store)

  // departments$: Observable<EmployeeModel[]>;
  // loading$: Observable<boolean>;
  // error$: Observable<any | null>;

  formModel: {
    employeeId?: number;
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    dateOfJoining: Date | null;
    departmentId: number | null;
    designationId: number | null;
    employeeType: string;
    salary: number | null;
  } = {
      fullName: '',
      email: '',
      phone: '',
      gender: '',
      dateOfJoining: null,
      departmentId: null,
      designationId: null,
      employeeType: '',
      salary: null
    };


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  save() {
    if (!this.formModel.fullName?.trim()) return;
    else {
      const payload = {
        employeeId: 101,
        fullName: this.formModel.fullName.trim(),
        email: this.formModel.email.trim(),
        phone: this.formModel.phone.trim(),
        gender: this.formModel.gender,
        dateOfJoining: this.formModel.dateOfJoining
          ? new Date(this.formModel.dateOfJoining)
          : new Date(),
        departmentId: this.formModel.departmentId!,
        designationId: this.formModel.designationId!,
        employeeType: this.formModel.employeeType,
        salary: this.formModel.salary!
      };
      this.store.dispatch(addEmp({ employeeModel: payload }))
    }
  }

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { CommonModule } from '@angular/common';
import { Department } from './department/department';
import { EmployeeComponent } from './employee-component/employee-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Department, EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sai');
}



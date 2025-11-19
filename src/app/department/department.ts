import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDepart } from '../store/action';
import { selectDepartmentData } from '../store/selector';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-department',
  imports: [CommonModule],
  templateUrl: './department.html',
  styleUrl: './department.scss',
})
export class Department implements OnInit {

  private store = inject(Store)
  data$ = this.store.select(selectDepartmentData);

  ngOnInit(): void {
    this.store.dispatch(loadDepart())
  }

}

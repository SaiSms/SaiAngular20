import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DepartmentState, EmpState } from "./reducer";

export const selectDepartmentSelector = createFeatureSelector<DepartmentState>('department')

export const selectDepartmentData = createSelector(
    selectDepartmentSelector,
    state => state.department
)

export const selectDepartmentLoading = createSelector(
    selectDepartmentSelector,
    state => state.loading
)

export const selectEmpState = createFeatureSelector<EmpState>('employeeModel');

export const selectAllDepartments = createSelector(
    selectEmpState,
    (state) => state.employeeModel
);

export const selectDepartmentsLoading = createSelector(
    selectEmpState,
    (state) => state.loading
);

export const selectDepartmentsError = createSelector(
    selectEmpState,
    (state) => state.error
);
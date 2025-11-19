import { createReducer, on } from "@ngrx/store";
import { Department } from "./departmentmodel";
import { addEmp, addEmpFailure, addEmpSuccess, loadDepart, loadDepartSuccess, loadEmp, loadEmpFailure, loadEmpSuccess } from "./action";
import { EmployeeModel } from "./employeemodel";

export interface DepartmentState {
    department: Department[],
    loading: boolean
}

export const initialState: DepartmentState = {
    department: [],
    loading: false
}

export const departmentReducer = createReducer(
    initialState,
    on(loadDepart, state => ({
        ...state,
        loading: true
    })),
    on(loadDepartSuccess, (state, { department }) => ({
        ...state,
        department,
        loading: false
    }))
)


export interface EmpState {
    employeeModel: EmployeeModel[],
    loading: boolean,
    error: any;
}

export const initialStateEmp: EmpState = {
    employeeModel: [],
    loading: false,
    error: undefined
}

export const empreducer = createReducer(
    initialStateEmp,
    on(loadEmp, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(loadEmpSuccess, (state, { employeeModel }) => ({
        ...state,
        employeeModel,
        loading: false
    })),
    on(loadEmpFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),
    on(addEmp, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(addEmpSuccess, (state, { employeeModel }) => ({
        ...state,
        loading: false,
        departments: [...state.employeeModel, employeeModel]
    })),
    on(addEmpFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
)
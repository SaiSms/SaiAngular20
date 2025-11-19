import { createAction, props } from "@ngrx/store";
import { Department } from "./departmentmodel";
import { EmployeeModel } from "./employeemodel";


export const loadDepart = createAction('[Department] Load Department')

export const loadDepartSuccess = createAction(
    '[Department] Load Department sucess',
    props<{ department: Department[] }>()
)

export const loadEmp = createAction('[Emp] Load Emp')

export const loadEmpSuccess = createAction(
    '[Emp] Load Department sucess',
    props<{ employeeModel: EmployeeModel[] }>()
)

export const loadEmpFailure = createAction(
    '[Emp] Load Emp Failure',
    props<{ error: any }>()
);

// Add
export const addEmp = createAction(
    '[Emp] Add Emp',
    props<{ employeeModel: Omit<EmployeeModel, 'employeeId'> }>() // id assigned by service
);
export const addEmpSuccess = createAction(
    '[Emp] Add Emp Success',
    props<{ employeeModel: EmployeeModel }>()
);
export const addEmpFailure = createAction(
    '[Emp] Add Emp Failure',
    props<{ error: any }>()
);
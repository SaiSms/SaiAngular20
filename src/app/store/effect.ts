import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DepartmentService } from "../services/department";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { addEmp, addEmpFailure, addEmpSuccess, loadDepart, loadDepartSuccess } from "./action";

@Injectable()

export class DeaprtmentEffect {

    action$ = inject(Actions);

    constructor(private departmentService: DepartmentService) {

    }

    loadDepartments$ = createEffect(() =>
        this.action$.pipe(
            ofType(
                loadDepart
            ),
            mergeMap(() =>
                this.departmentService.getDepartment().pipe(
                    map((department: any) =>
                        loadDepartSuccess({ department })
                    )
                )
            )
        )
    )

    // Add department effect
    addDepartment$ = createEffect(() =>
        this.action$.pipe(
            ofType(addEmp),
            switchMap(({ employeeModel }) =>
                this.departmentService.addemp(employeeModel).pipe(
                    map(dept => addEmpSuccess({ employeeModel: dept })),
                    catchError(error => of(addEmpFailure({ error })))
                )
            )
        )
    );

    
}
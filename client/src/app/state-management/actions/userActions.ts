import { Action } from "@ngrx/store";
import { UserState } from "../state/userState";

// UserState actions
export const LOGIN:string = "LOGIN";
export const LOGOUT:string = "LOGOUT";

export class Login implements Action {
    readonly type = LOGIN
    constructor(public payload: UserState){}
}

export type Actions = Login;
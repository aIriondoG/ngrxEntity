import { Action } from '@ngrx/store';
import { Cosa } from '../reducer/reducer';
//Constantes de acciones
export const LOAD_COSAS = '[Cosa] Load Cosa';
export const ADD_COSA = '[Cosa] Add Cosa';
export const ADD_COSAS = '[Cosa] Add Cosas';
export const UPDATE_COSA = '[Cosa] Update Cosa';
export const UPDATE_COSAS = '[Cosa] Update Cosas';
export const DELETE_COSA = '[Cosa] Delete Cosa';
export const DELETE_COSAS = '[Cosa] Delete Cosas';
export const CLEAR_COSAS = '[Cosa] Clear Cosas';
//Acciones
export class LoadCosa implements Action {
    readonly type = LOAD_COSAS;

    constructor(public payload: { cosas: Cosa[] }) { }
}

export class AddCosa implements Action {
    readonly type = ADD_COSA;

    constructor(public payload: { cosa: Cosa }) { }
}

export class AddCosas implements Action {
    readonly type = ADD_COSAS;

    constructor(public payload: { cosas: Cosa[] }) { }
}

export class UpdateCosa implements Action {
    readonly type = UPDATE_COSA;

    constructor(public payload: { cosa: { id: string, changes: Cosa } }) { }
}

export class UpdateCosas implements Action {
    readonly type = UPDATE_COSAS;

    constructor(public payload: { cosas: { id: string, changes: Cosa }[] }) { }
}

export class DeleteCosa implements Action {
    readonly type = DELETE_COSA;

    constructor(public payload: { id: string }) { }
}

export class DeleteCosas implements Action {
    readonly type = DELETE_COSAS;

    constructor(public payload: { ids: string[] }) { }
}

export class ClearCosas implements Action {
    readonly type = CLEAR_COSAS;
}

export type All =
    LoadCosa
    | AddCosa
    | AddCosas
    | UpdateCosa
    | UpdateCosas
    | DeleteCosa
    | DeleteCosas
    | ClearCosas;
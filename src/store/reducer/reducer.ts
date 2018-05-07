//Implementaciones de @ngrx necesarias
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
//Implementacion de acciones
import * as myActions from '../action/action';
//Definicion de cosa
export interface Cosa {
    id?: string;
    name: string;
    text: string;
}
//Definicion de la identidad de cosa
export interface State extends EntityState<Cosa> {
    selectedCosaId: string | null;
}
//Adaptador de identidad
export const adapter: EntityAdapter<Cosa> = createEntityAdapter<Cosa>();
//Estado inicial de la identidad
export const estadoInicial: State = adapter.getInitialState({
    selectedCosaId: null
});
//Reductor
export function reducer(
    state = estadoInicial,
    action: myActions.All
): State {
    switch (action.type) {
        case myActions.ADD_COSA: {
            return adapter.addOne( action.payload.cosa , state);
        }
        case myActions.ADD_COSAS: {
            return adapter.addMany(action.payload.cosas, state);
        }
        case myActions.UPDATE_COSA: {
            return adapter.updateOne(action.payload.cosa, state);
        }
        case myActions.UPDATE_COSAS: {
            return adapter.updateMany(action.payload.cosas, state);
        }
        case myActions.DELETE_COSA: {
            return adapter.removeOne(action.payload.id, state);
        }
        case myActions.DELETE_COSAS: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case myActions.LOAD_COSAS: {
            return adapter.addAll(action.payload.cosas, state);
        }
        case myActions.CLEAR_COSAS: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }

}

export const selectCosaState = createFeatureSelector<State>('cosaStore');

export const {
    // select the array of stuff ids
    selectIds: selectCosaIds,

    // select the dictionary of stuff entities
    selectEntities: selectCosaEntities,

    // select the array of stuff
    selectAll: selectAllCosas,

    // select the total stuff count
    selectTotal: selectCosaTotal
} = adapter.getSelectors(selectCosaState)

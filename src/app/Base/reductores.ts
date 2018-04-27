import { ActionReducer, Action } from '@ngrx/store';

export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';
export const RESET = 'RESET';
export const ADD_HOUR = 'ADD_HOUR';
export const REMOVE_HOUR = 'REMOVE_HOUR';
export const ADD = 'ADD';

export function personas(state = [], action) {
    switch (action.type) {
        case 'ADD_PERSON':
            /*return [state, Object.assign({}, {
                id: action.payload.id,
                name: action.payload.name
            })];*/

           return  [state , Object.assign({}, action.payload)];
        //return Object.assign({}, state, action.payload)
        case 'DELETE_PERSON':
            return state.filter(person => person.id !== action.payload);
        default:
            return state;
    }
}
export function arrays(state = [], action) {
    switch (action.type) {
        case 'ADD':
           return  [state , action.payload ];
    }
}

export function hTrabajadas(state = 0, action) {
    switch (action.type) {
        case 'ADD_HOUR':
            return state + 1;
        case 'REMOVE_HOUR':
            return state - 1;
        case 'RESET':
            return;
        default:
            return state;
    }
}
const myReducers = { personas, hTrabajadas };
const combineReducers = reducers => (state = [], action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
    }, {});
};

export const rootReducer = combineReducers(myReducers);

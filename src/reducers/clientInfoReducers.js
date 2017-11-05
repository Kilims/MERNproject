"use strict"

export function clientInfoReducers(state={clientInfo:[]}, action) {
    switch (action.type) {
        case "GET_CLIENTINFO":
            return {...state, clientInfo:[...action.payload]};            
    
        default:
            break;
    }

    return state;
}
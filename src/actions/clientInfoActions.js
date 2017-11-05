"use strict"
import axios from 'axios';

export function getClientInfo() {
    return function(dispatch) {
        axios.get("/api/clientInfo")
            .then(function(response) {
                dispatch({type: "GET_CLIENTINFO", payload: response.data})
            })
            .catch(function(err) {
                dispatch({type: "GET_CLIENTINFO_REJECTED", payload:err})
            })
    }
}
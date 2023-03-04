import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    payload: [],
    updateResponse:{},
    postResponse: {},
    deleteResponse:{},
    isError : false
}

// reducer function-
export const reducer = (state = initState, action) => {
    const {type, payload, postResponse, updateResponse, deleteResponse} = action;

    switch(type)
    {
        // get accessoreis data-
        case types.GET_ACCESSORIES_REQUEST:
            return {...state, isLoading: true}

        case types.GET_ACCESSORIES_SUCCESS:
            return {...state, isLoading: false, payload}

        case types.GET_ACCESSORIES_ERROR:
            return {...state, isLoading: false, isError: true, payload}


        // post accessoreis data-
        case types.POST_ACCESSORIES_REQUEST:
            return {...state, isLoading: true}

        case types.POST_ACCESSORIES_SUCCESS:
            return {...state, isLoading: false, postResponse}

        case types.POST_ACCESSORIES_ERROR:
            return {...state, isLoading: false, isError: true, postResponse}


        // update accessoreis-
        case types.UPDATE_ACCESSORIES_REQUEST:
            return {...state, isLoading: true}

        case types.UPDATE_ACCESSORIES_SUCCESS:
            return {...state, isLoading: false, updateResponse}

        case types.UPDATE_ACCESSORIES_ERROR:
            return {...state, isLoading: false, isError: true, updateResponse}


        // delete accessoreis-
        case types.DELETE_ACCESSORIES_REQUEST:
            return {...state, isLoading: true}

        case types.DELETE_ACCESSORIES_SUCCESS:
            return {...state, isLoading: false, deleteResponse}

        case types.DELETE_ACCESSORIES_ERROR:
            return {...state, isLoading: false, isError: true, deleteResponse}


        default:
            return{...state}
    }
}
import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    payload: [],
    singleStudentData: {},
    updateResponse:{},
    postResponse: {},
    deleteResponse:{},
    isError : false
}

// reducer function-
export const reducer = (state = initState, action) => {
    const {type, payload, postResponse, singleStudentData, updateResponse, deleteResponse} = action;

    switch(type)
    {
        // get all students data-
        case types.GET_ALL_STUDENTS_REQUEST:
            return {...state, isLoading: true}

        case types.GET_ALL_STUDENTS_SUCCESS:
            return {...state, isLoading: false, payload}

        case types.GET_ALL_STUDENTS_ERROR:
            return {...state, isLoading: false, isError: true, payload}


        // get single student data-
        case types.GET_SINGLE_STUDENT_REQUEST:
            return {...state, isLoading: true}

        case types.GET_SINGLE_STUDENT_SUCCESS:
            return {...state, isLoading: false, singleStudentData}

        case types.GET_SINGLE_STUDENT_ERROR:
            return {...state, isLoading: false, isError: true, singleStudentData}


        // post student data-
        case types.POST_STUDENTS_REQUEST:
            return {...state, isLoading: true}

        case types.POST_STUDENTS_SUCCESS:
            return {...state, isLoading: false, postResponse}

        case types.POST_STUDENTS_ERROR:
            return {...state, isLoading: false, isError: true, postResponse}


        // update student data-
        case types.UPDATE_STUDENT_REQUEST:
            return {...state, isLoading: true}

        case types.UPDATE_STUDENT_SUCCESS:
            return {...state, isLoading: false, updateResponse}

        case types.UPDATE_STUDENT_ERROR:
            return {...state, isLoading: false, isError: true, updateResponse}


        // delete student data-
        case types.DELETE_STUDENT_REQUEST:
            return {...state, isLoading: true}

        case types.DELETE_STUDENT_SUCCESS:
            return {...state, isLoading: false, deleteResponse}

        case types.DELETE_STUDENT_ERROR:
            return {...state, isLoading: false, isError: true, deleteResponse}


        default:
            return{...state}
    }
}
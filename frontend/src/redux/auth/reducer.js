import * as types from "./actionType";


// initial state-
const initState = {
    isLoading : false,
    signUp : {},
    emailSignInResponse : {},
    forgetPasswordResponse  : {},
    isError : false
}


// reducer function-
export const reducer = (state = initState, action) => {
    const {signUp, type, emailSignInResponse, forgetPasswordResponse} = action;

    switch(type)
    {
        // sign up-
        case types.REQUEST_SIGN_UP:
            return {...state, isLoading: true}

        case types.SUCCESS_SIGN_UP:
            return {...state, isLoading: false, signUp}

        case types.ERROR_SIGN_UP:
            return {...state, isLoading: false, isError: true, signUp}


            // sign in with email-
        case types.REQUEST_SIGN_IN_WITH_EMAIL:
            return {...state, isLoading: true}

        case types.SUCCESS_SIGN_IN_WITH_EMAIL:
            return {...state, isLoading: false, emailSignInResponse}

        case types.ERROR_SIGN_IN_WITH_EMAIL:
            return {...state, isLoading: false, isError: true, emailSignInResponse}


            // forget password-
        case types.REQUEST_FORGET_PASSWORD:
            return {...state, isLoading: true}

        case types.SUCCESS_FORGET_PASSWORD:
            return {...state, isLoading: false, forgetPasswordResponse}

        case types.ERROR_FORGET_PASSWORD:
            return {...state, isLoading: false, isError: true, forgetPasswordResponse}

        default:
            return{...state}
    }
}
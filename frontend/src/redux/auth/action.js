import * as types from "./actionType";
import axios from "axios";


// sign up-
export const signUp = (sendData) => (dispatch) => {
    dispatch({type: types.REQUEST_SIGN_UP})
    return axios.post("https://ill-zipper-duck.cyclic.app/auth/signup", sendData)
        .then(res=>{
            dispatch({type: types.SUCCESS_SIGN_UP, signUp: res.data})
        })
        .catch(error=>{
            return dispatch({type: types.ERROR_SIGN_UP, signUp: error.response.data})
        })
} 


// sign in with email-
export const signInWithEmail = (sendData) => (dispatch) => {
    dispatch({type: types.REQUEST_SIGN_IN_WITH_EMAIL})
    return axios.post("https://ill-zipper-duck.cyclic.app/api/v1/auth/signin", sendData)
        .then(res=>{
            return dispatch({type: types.SUCCESS_SIGN_IN_WITH_EMAIL, emailSignInResponse: res.data})
        })
        .catch(error=>{
            return dispatch({type: types.ERROR_SIGN_IN_WITH_EMAIL, emailSignInResponse: error.response.data})
        })
} 


// forget password-
export const forgetPassword = (sendData) => (dispatch) => {
    dispatch({type: types.REQUEST_FORGET_PASSWORD})
    return axios.post("https://ill-zipper-duck.cyclic.app/api/v1/auth/forget-password", sendData)
        .then(res=>{
            alert(res.data.message);
            return dispatch({type: types.SUCCESS_FORGET_PASSWORD, forgetPasswordResponse: res.data})
        })
        .catch(error=>{
            alert(error.response.data.error);
            return dispatch({type: types.ERROR_FORGET_PASSWORD, forgetPasswordResponse: error.response.data})
        })
} 
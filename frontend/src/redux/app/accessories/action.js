import axios from "axios";
import * as types from "./actionType";

// get all students data-
export const getAccessoreis = ()=> (dispatch)=>{
    dispatch({type: types.GET_ACCESSORIES_REQUEST})
    return axios
        .get("https://sr-gurukul-academy-server.vercel.app/api/v1/accessory")
        .then(res=>{
            dispatch({type: types.GET_ACCESSORIES_SUCCESS, payload:res.data})
        })
        .catch(err=>{
            dispatch({type: types.GET_ACCESSORIES_ERROR})
        })
}

// add accessoreis data-
export const postAccessoreisData = (payload)=> (dispatch)=>{
    dispatch({type: types.POST_ACCESSORIES_REQUEST})
    return axios
        .post("https://sr-gurukul-academy-server.vercel.app/api/v1/accessory/addaccessory", payload)
        .then(res=>{
            dispatch({type: types.POST_ACCESSORIES_SUCCESS, postResponse: res.data.message})
            alert(res.data.message)
        })
        .catch(err=>{
            alert(err.response.data.error);
            dispatch({type: types.POST_ACCESSORIES_ERROR})
        })
}

// update accessoreis data-
export const updateAccessoreis = (payload, _id)=> (dispatch)=>{
    dispatch({type: types.UPDATE_ACCESSORIES_REQUEST})
    return axios
        .patch(`https://sr-gurukul-academy-server.vercel.app/api/v1/accessory/updateaccessory/${_id}`, payload)
        .then(res=>{
            dispatch({type: types.UPDATE_ACCESSORIES_SUCCESS, updateResponse: res.data.message})
            alert(res.data.message)
        })
        .catch(err=>{
            dispatch({type: types.UPDATE_ACCESSORIES_ERROR})
        })
}

// delete accessoreis data-
export const deleteAccessoreis = (_id)=> (dispatch)=>{
    dispatch({type: types.DELETE_ACCESSORIES_REQUEST})
    return axios
        .delete(`https://sr-gurukul-academy-server.vercel.app/api/v1/accessory/deleteaccessory/${_id}`)
        .then(res=>{
            alert(res.data.message)
            dispatch({type: types.DELETE_ACCESSORIES_SUCCESS, deleteResponse: res.data.message})
        })
        .catch(err=>{
            alert(err.response.data.error);
            dispatch({type: types.DELETE_ACCESSORIES_ERROR})
        })
}
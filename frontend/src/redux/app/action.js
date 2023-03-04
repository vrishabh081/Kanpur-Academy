import axios from "axios";
import * as types from "./actionType";

// get all students data-
export const getAllStudentsData = ()=> (dispatch)=>{
    dispatch({type: types.GET_ALL_STUDENTS_REQUEST})
    return axios
        .get("https://sr-gurukul-academy-server.vercel.app/api/v1/student")
        .then(res=>{
            dispatch({type: types.GET_ALL_STUDENTS_SUCCESS, payload:res.data})
        })
        .catch(err=>{
            dispatch({type: types.GET_ALL_STUDENTS_ERROR})
        })
}

// get single student data-
export const getSingleStudentsData = (_id)=> (dispatch)=>{
    dispatch({type: types.GET_SINGLE_STUDENT_REQUEST})
    return axios
        .get(`https://sr-gurukul-academy-server.vercel.app/api/v1/student/${_id}`)
        .then(res=>{
            dispatch({type: types.GET_SINGLE_STUDENT_SUCCESS, singleStudentData:res.data[0]})
        })
        .catch(err=>{
            dispatch({type: types.GET_SINGLE_STUDENT_ERROR})
        })
}

// add student data-
export const postStudentData = (payload)=> (dispatch)=>{
    dispatch({type: types.POST_STUDENTS_REQUEST})
    return axios
        .post("https://sr-gurukul-academy-server.vercel.app/api/v1/student/addstudent", payload)
        .then(res=>{
            alert(res.data.message);
            dispatch({type: types.POST_STUDENTS_SUCCESS, postResponse: res.data})
        })
        .catch(err=>{
            alert(err.response.data.error)
            dispatch({type: types.POST_STUDENTS_ERROR, postResponse: err.response.data})
        })
}

// update student data-
export const updateStudentData = (payload, _id)=> (dispatch)=>{
    dispatch({type: types.UPDATE_STUDENT_REQUEST})
    return axios
        .patch(`https://sr-gurukul-academy-server.vercel.app/api/v1/student/updatestudent/${_id}`, payload)
        .then(res=>{
            dispatch({type: types.UPDATE_STUDENT_SUCCESS, updateResponse: res.data})
        })
        .catch(err=>{
            dispatch({type: types.UPDATE_STUDENT_ERROR, updateResponse: err.response.data})
        })
}

// delete student data-
export const deleteStudentData = (_id)=> (dispatch)=>{
    dispatch({type: types.DELETE_STUDENT_REQUEST})
    return axios
        .delete(`https://sr-gurukul-academy-server.vercel.app/api/v1/student/deletestudent/${_id}`)
        .then(res=>{
            dispatch({type: types.DELETE_STUDENT_SUCCESS, deleteResponse: res.data})
        })
        .catch(err=>{
            dispatch({type: types.DELETE_STUDENT_ERROR, deleteResponse: err.response.data})
        })
}
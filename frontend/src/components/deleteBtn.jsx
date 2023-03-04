import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStudentData, getAllStudentsData } from "../redux/app/action";
import { DeleteModal } from "./deleteModal";

export const DeleteBtn = ({_id})=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteStudentRecord = () =>{
        dispatch(deleteStudentData(_id))
        navigate("/");
    }

    return(
        // <ion-icon name="trash-outline" onClick = {deleteStudentRecord}></ion-icon>
        <DeleteModal deleteStudentRecord={deleteStudentRecord}/>
    )
}
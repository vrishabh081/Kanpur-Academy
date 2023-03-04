import "../style/home.css";
import {Link} from "react-router-dom";

export const StudentsCard = ({students}) => {
    const {_id, studentName, studentPhoto, dob, studentClass, fatherName, motherName} = students;


    return(
        <div style={{margin:"0 1rem"}}>
            <Link to={`/${_id}`}>
                <div id="student-card">
                    <div id="student-photo">
                        <img src={studentPhoto} alt="" />
                    </div>
                    <div id="student-details">
                        <h2>{studentName}</h2>
                        <p>Date of birth - {dob}</p>
                        <p>Father's name - {fatherName}</p>
                        <p>Mother's name - {motherName}</p>
                        <p>Class - {studentClass}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
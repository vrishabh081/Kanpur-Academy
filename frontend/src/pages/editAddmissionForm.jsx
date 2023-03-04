import { useEffect, useState } from "react";
import "../style/addmissionForm.css";
import axios from "axios";
import { getAllStudentsData, getSingleStudentsData, postStudentData, updateStudentData } from "../redux/app/action";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import { Navbar } from "../components/navbar";

export const EditAddmissionForm = ()=>{

    const {_id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // getting data-
    useEffect(()=>{
        dispatch(getSingleStudentsData(_id));
    }, [])

    // single student data with dispatch-
    const data = useSelector((store)=>store.appReducer);
    const {isLoading, singleStudentData, isError} = data;

    // student data-
    const {studentName, studentPhoto, studentClass, studentAdhaarCard, dob, fatherName, 
        motherName, parentAdhaarCard, parentOccupation, address, mobileNumber1, mobileNumber2,
        createdAt
    } = singleStudentData;


    const [loading, setLoading] = useState(false);

    // students-
    const [studentNameEdit, setStudentNameEdit] = useState("");
    const [dobEdit, setDobEdit] = useState("");
    const [studentAdhaarCardEdit, setStudentAdhaarCardEdit] = useState("");
    const [studentPhotoEdit, setStudentPhotoEdit] = useState("");
    const [studentClassEdit, setStudentClassEdit] = useState("");

    // parents-
    const [fatherNameEdit, setFatherNameEdit] = useState("");
    const [motherNameEdit, setMotherNameEdit] = useState("");
    const [parentAdhaarCardEdit, setParentAdhaarCardEdit] = useState("");
    const [parentOccupationEdit, setParentOccupationEdit] = useState("");
    const [mobileNumber1Edit, setMobileNumber1Edit] = useState("");
    const [mobileNumber2Edit, setMobileNumber2Edit] = useState("");
    const [addressEdit, setAddressEdit] = useState("");


    // preview image-
    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
          URL.revokeObjectURL(output.src); // free memory
        };
    };

    // form submit-
    const updateSubmitHandler = (e)=>{
        e.preventDefault(e)

        // payload-
        let payload = {
            studentNameEdit,
            dobEdit,
            studentAdhaarCardEdit,
            studentClassEdit,
            fatherNameEdit,
            motherNameEdit,
            parentAdhaarCardEdit,
            parentOccupationEdit,
            mobileNumber1Edit,
            mobileNumber2Edit,
            addressEdit
        }

        // console.log(payload);
        // add all details of a students-
        dispatch(updateStudentData(payload, _id)).then(()=>dispatch(getAllStudentsData()));
    }

    // private route-
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            return navigate("/auth/sign-in-email")
        }
    }, [])

    return(
        <>
            <Navbar/>
                <div id="admission-form-main-div">
                <h1>Edit Addmission Form</h1>
                <form id="addmission-form">
                    
                    {/* students details */}
                    <h3>Student's Details -</h3>
                    <div className="details">
                        <div>
                            <div className="image-select">
                                <img src={studentPhoto} id="output" alt="" />
                                <input type="file" accept="image/*" onChange={(e)=> {loadfile(e); setStudentPhotoEdit(e.target.files[0])}} />
                            </div>
                            <div>
                                {/* student name */}
                                <div>
                                    <label>Name</label>
                                    <input type="text" placeholder="Type Student Name" value={studentNameEdit || studentName} onChange={(e)=>setStudentNameEdit(e.target.value)} />
                                </div>

                                {/* student dob */}
                                <div>
                                    <label>Date Of Birth</label>
                                    <input type="date" value={dobEdit || dob} onChange={(e)=>setDobEdit(e.target.value)} />
                                </div>

                                {/* student adhaar card */}
                                <div>
                                    <label>Adhaar Card</label>
                                    <input type="tel" maxLength={12} value={studentAdhaarCardEdit || studentAdhaarCard} placeholder="Type Student's Adhaar Card" onChange={(e)=>setStudentAdhaarCardEdit(e.target.value)} />
                                </div>

                                {/* class */}
                                <div>
                                    <label>Class</label>
                                    <select name="" value={studentClassEdit || studentClass} onChange={(e)=>setStudentClassEdit(e.target.value)}>
                                        <option value="">Class</option>
                                        <option value="PG">PG</option>
                                        <option value="LKG">LKG</option>
                                        <option value="UKG">UKG</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* parents details */}
                    <div>
                        <h3>Parents Details -</h3>
                        <div>
                            <div id="parent-details">
                                {/* father name */}
                                <div>
                                    <label>Father's Name</label>
                                    <input type="text" value={fatherNameEdit || fatherName} placeholder="Type Father's Name" onChange={(e)=>setFatherNameEdit(e.target.value)} />
                                </div>

                                {/* mother name */}
                                <div>
                                    <label>Mother's Name</label>
                                    <input type="text" value={motherNameEdit || motherName} placeholder="Type Mother's Name" onChange={(e)=>setMotherNameEdit(e.target.value)} />
                                </div>

                                {/* parent adhaar card */}
                                <div>
                                    <label>Adhaar Card</label>
                                    <input type="text" value={parentAdhaarCardEdit || parentAdhaarCard} maxLength={12} placeholder="Type Parents's Adhhaar Card" onChange={(e)=>setParentAdhaarCardEdit(e.target.value)} />
                                </div>

                                {/* occupation */}
                                <div>
                                    <label>Occupation</label>
                                    <input type="text" value={parentOccupationEdit || parentOccupation} placeholder="Type Occupation" onChange={(e)=>setParentOccupationEdit(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* addressEdit */}
                    <div>
                        <h3>Address & Contact -</h3>
                        <div>
                            <div id="address-contact-details">
                                {/* address */}
                                <div id="address">
                                    <label>Permanent Address</label>
                                    <textarea placeholder="Type Address" value={addressEdit || address} onChange={(e)=>setAddressEdit(e.target.value)} />
                                </div>

                                {/* mobile number 1 */}
                                <div>
                                    <label>Mobile Number 1</label>
                                    <input type="tel" maxLength={10} value={mobileNumber1Edit || mobileNumber1} placeholder="Type Mobile Number 1" onChange={(e)=>setMobileNumber1Edit(e.target.value)} />
                                </div>

                                {/* mobile number 2 */}
                                <div>
                                    <label>Mobile Number 2</label>
                                    <input type="tel" maxLength={10} value={mobileNumber2Edit || mobileNumber2} placeholder="Type Mobile Number 2" onChange={(e)=>setMobileNumber2Edit(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="submit" id="form-btn" onClick={(e)=>updateSubmitHandler(e)} value={loading === true ? "Wait..." : "Submit"} />
                </form>
            </div>
        </>
    )
}
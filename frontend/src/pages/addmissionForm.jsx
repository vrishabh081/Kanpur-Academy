import { useEffect, useState } from "react";
import "../style/addmissionForm.css";
import userPhoto from "../Images/userPhoto.png"
import axios from "axios";
import { getAllStudentsData, postStudentData } from "../redux/app/action";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { Navbar } from "../components/navbar";

export const AddmissionForm = ()=>{
    const [loading, setLoading] = useState(false);

    // students-
    const [studentName, setStudentName] = useState("");
    const [dob, setDob] = useState("");
    const [studentAdhaarCard, setStudentAdhaarCard] = useState("");
    const [studentPhoto, setStudentPhoto] = useState("");
    const [studentClass, setStudentClass] = useState("");

    // parents-
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [parentAdhaarCard, setParentAdhaarCard] = useState("");
    const [parentOccupation, setParentOccupation] = useState("");
    const [mobileNumber1, setMobileNumber1] = useState("");
    const [mobileNumber2, setMobileNumber2] = useState("");
    const [address, setAddress] = useState("");

    // redux and navigate-
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(store=>store.appReducer)
    const {postResponse, isLoading, isError} = data;
    // private route-
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            return navigate("/auth/sign-in-email")
        }
    }, [])

    // preview image-
    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
          URL.revokeObjectURL(output.src); // free memory
        };
    };

    // form submit-
    const submitHandler = (e)=>{
        e.preventDefault(e)

        if(!studentPhoto)
        {
            return alert("Please fill all the details");
        }
        else
        {
        // cloudinary-
            setLoading(true);
            const data = new FormData();
            data.append("file", studentPhoto);
            data.append("upload_preset", "SR-Gurukul-Academy");
            data.append("cloud_name", "rishabhcloudinary")
            axios
            .post("https://api.cloudinary.com/v1_1/rishabhcloudinary/image/upload", data)
            .then(res=>{
                setLoading(false);
                if(res.data.url)
                {
                    // payload-
                    let payload = {
                        studentName,
                        studentPhoto: res.data.url,
                        dob,
                        studentAdhaarCard,
                        studentClass,
                        fatherName,
                        motherName,
                        parentAdhaarCard,
                        parentOccupation,
                        mobileNumber1,
                        mobileNumber2,
                        address
                    }
                    // add all details of a students-
                    dispatch(postStudentData(payload)).then(()=>dispatch(getAllStudentsData()));
                    navigate("/");
                }
            })
            .catch(err=>console.log(err))
        }
    }

    return(
        <>
            <Navbar/>
                <div id="admission-form-main-div">
                <h1>Addmission Form</h1>
                <form id="addmission-form">
                    
                    {/* students details */}
                    <h3>Student's Details -</h3>
                    <div className="details">
                        <div>
                            <div className="image-select">
                                <img src={userPhoto} id="output" alt="" />
                                <input type="file" accept="image/*" onChange={(e)=> {loadfile(e); setStudentPhoto(e.target.files[0])}} />
                            </div>
                            <div>
                                <div>
                                    <label>Name</label>
                                    <input type="text" placeholder="Type Student Name" onChange={(e)=>setStudentName(e.target.value)} />
                                </div>
                                <div>
                                    <label>Date Of Birth</label>
                                    <input type="date" onChange={(e)=>setDob(e.target.value)} />
                                </div>
                                <div>
                                    <label>Adhaar Card</label>
                                    <input type="tel" maxLength={12} placeholder="Type Student's Adhaar Card" onChange={(e)=>setStudentAdhaarCard(e.target.value)} />
                                </div>
                                <div>
                                    <label>Class</label>
                                    <select name="" onChange={(e)=>setStudentClass(e.target.value)}>
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
                                <div>
                                    <label>Father's Name</label>
                                    <input type="text" placeholder="Type Father's Name" onChange={(e)=>setFatherName(e.target.value)} />
                                </div>
                                <div>
                                    <label>Mother's Name</label>
                                    <input type="text" placeholder="Type Mother's Name" onChange={(e)=>setMotherName(e.target.value)} />
                                </div>
                                <div>
                                    <label>Adhaar Card</label>
                                    <input type="tel" maxLength={12} placeholder="Type Parents's Adhhaar Card" onChange={(e)=>setParentAdhaarCard(e.target.value)} />
                                </div>
                                <div>
                                    <label>Occupation</label>
                                    <input type="text" placeholder="Type Occupation" onChange={(e)=>setParentOccupation(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* address */}
                    <div>
                        <h3>Address & Contact -</h3>
                        <div>
                            <div id="address-contact-details">
                                <div id="address">
                                    <label>Permanent Address</label>
                                    <textarea placeholder="Type Address" onChange={(e)=>setAddress(e.target.value)} />
                                </div>
                                <div>
                                    <label>Mobile Number 1</label>
                                    <input type="tel" maxLength={10} placeholder="Type Mobile Number 1" onChange={(e)=>setMobileNumber1(e.target.value)} />
                                </div>
                                <div>
                                    <label>Mobile Number 2</label>
                                    <input type="tel" maxLength={10} placeholder="Type Mobile Number 2" onChange={(e)=>setMobileNumber2(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="submit" id="form-btn" onClick={(e)=>submitHandler(e)} value={loading === true ? "Wait..." : "Submit"} />
                </form>
            </div>
        </>
    )
}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteStudentData, getAllStudentsData, getSingleStudentsData } from "../redux/app/action";
import jsPDF from "jspdf";
import pdfIcon from "../Images/pdfLogo.png";
import srLogo from "../Images/SR_Logo.png";
import { Navbar } from "./navbar";
import { DeleteModal } from "./deleteModal";

export const SingleStudent = ()=>{
    const {_id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // getting data-
    useEffect(()=>{
        dispatch(getSingleStudentsData(_id));
    }, [])

    // single student data with dispatch-
    const data = useSelector((store)=>store.appReducer);
    const {isLoading, singleStudentData, isError} = data;

    const {studentName, studentPhoto, studentClass, studentAdhaarCard, dob, fatherName, 
        motherName, parentAdhaarCard, parentOccupation, address, mobileNumber1, mobileNumber2,
        createdAt
    } = singleStudentData;

    // date-
    var x = new Date(new Date());
    let date = x.toLocaleDateString();
    // console.log(date)

    // pdf downlaod-
    const generatePdf = ()=>{
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#single-student-data"), {
            callback: function(pdf){
                pdf.save(`${studentName}.pdf`)
            }
        })
    }

    // delete accessories-
    const deleteStudentRecord = () =>{
        dispatch(deleteStudentData(_id)).then(()=>dispatch(getAllStudentsData()))
        navigate("/");
    }

    if(isLoading)
    {
        return <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50vh"}} ><h1 id="loader">Please Wait...</h1></div>
    }


    return(
        <>
            <Navbar/>
            <div style={{margin:"6rem auto 2rem auto"}}>
                <div id="single-student-data">
                    <div>
                        <img src={srLogo} alt="" />
                        <h2>Kanpur Academy</h2>
                    </div>
                    <div>
                        <div id="single-student-details">
                            <div>
                                <img src={studentPhoto} alt="" />
                            </div>
                            <div>
                                <h2>{studentName}</h2>
                                <p>Class - {studentClass}</p>
                                <p>Date of birth - {dob}</p>
                                <p>Student Aadhaar Card - {studentAdhaarCard}</p>
                            </div>
                        </div>
                        <h3 style={{marginTop:"2rem"}}>Parents Details -</h3>
                        <div id="parents-details">
                            <div>
                                <p>Father's Name - {fatherName}</p>
                                <p>Mother's Name - {motherName}</p>
                            </div>
                            <div>
                                <p>Occupation - {parentOccupation}</p>
                                <p>Parents Aadhaar Card - {parentAdhaarCard}</p>
                            </div>
                        </div>
                        <h3 style={{marginTop:"2rem"}}>Address & Contact -</h3>
                        <div id="single-address-details">
                            <div>
                                <p style={{width:"100%"}}>Address - {address}</p>
                            </div>
                            <div>
                                <p>Mobile Number 1 - {mobileNumber1}</p>
                                <p>Mobile Number 2 - {mobileNumber2}</p>
                            </div>
                        </div>
                        <h3 style={{marginTop:"2rem"}}>Addmission date -</h3>
                        <div id="admission-date">
                            <p>{(date !== "Inavlid Date") ? date : ""} ( DD/MM/YYYY )</p>
                        </div>
                    </div>
                </div>
                <div id="single-student-info-section">
                    <div>
                        <Link to={`/edit/${_id}`}><ion-icon name="create-outline" ></ion-icon></Link>
                        <DeleteModal deleteStudentRecord={deleteStudentRecord} />
                    </div>
                    <div id="pdf-download-btn">
                        <img src={pdfIcon} alt="pdf-icon" onClick={generatePdf} />
                    </div>
                </div>
            </div>
        </>
    );
}
import { useState } from "react";
import "../style/addmissionForm.css";
import userPhoto from "../Images/userPhoto.png"
import axios from "axios";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { getAccessoreis, postAccessoreisData } from "../redux/app/accessories/action";
import { Navbar } from "./navbar";

export const AddAccesories = ()=>{
    const [loading, setLoading] = useState(false);

    // students-
    const [accessoriesName, setAccessoriesName] = useState("");
    const [accessoriesPhoto, setAccessoriesPhoto] = useState("");
    const [accessoriesPrice, setAccessoriesPrice] = useState("");
    const [accessoriesAbout, setAccessoriesAbout] = useState("");

    // redux and navigate-
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

        if(!accessoriesPhoto)
        {
            return alert("Please fill all the details");
        }
        else
        {
        // cloudinary-
            setLoading(true);
            const data = new FormData();
            data.append("file", accessoriesPhoto);
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
                        accessoriesName,
                        accessoriesPhoto: res.data.url,
                        accessoriesPrice,
                        accessoriesAbout
                    }

                    dispatch(postAccessoreisData(payload)).then(()=>dispatch(getAccessoreis()));
                    navigate("/accessories")
                }
            })
            .catch(err=>console.log(err))
        }
    }

    return(
        <>
            <Navbar/>
            <div id="admission-form-main-div">
                <h1>Accessory Form</h1>
                <form id="addmission-form">
                    
                    {/* students details */}
                    <h3>Accessory Details -</h3>
                    <div className="details">
                        <div>
                            <div className="image-select">
                                <img src={userPhoto} id="output" alt="" />
                                <input type="file" accept="image/*" onChange={(e)=> {loadfile(e); setAccessoriesPhoto(e.target.files[0])}} />
                            </div>
                            <div>
                                <div>
                                    <label>Title</label>
                                    <input type="text" placeholder="Type Accessory Name" onChange={(e)=>setAccessoriesName(e.target.value)} />
                                </div>
                                <div>
                                    <label>Price</label>
                                    <input type="tel" placeholder="Type Accessory Price" onChange={(e)=>setAccessoriesPrice(e.target.value)} />
                                </div>
                                <div>
                                    <label>About</label>
                                    <textarea id="accessory-about" placeholder="Write something about it..." onChange={(e)=>setAccessoriesAbout(e.target.value)} />
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
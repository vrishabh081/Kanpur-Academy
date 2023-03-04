import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "../style/auth.css"
import SR_Logo from "../Images/SR_Logo.png";


export const Otp = ()=>{
    const [otpNumber, setOtpNumber] = useState("");
    const navigate = useNavigate();

    // verify otp function-
    const verifyOtp = ()=>{
        if(otpNumber !== sessionStorage.getItem("otp"))
        {
            alert("Wrong OTP");
        }
        else
        {
            localStorage.setItem("name", JSON.stringify(sessionStorage.getItem("name")))
            localStorage.setItem("token", JSON.stringify(sessionStorage.getItem("token")))
            sessionStorage.clear();
            alert("Successfully OTP verified");
            navigate("/");
        }
    }

    // private route-
    useEffect(()=>{
        if(localStorage.getItem("token"))
        {
            return navigate("/");
        }
    }, [])

    return(
        <>
        <div id="sign-in-with-email">
            <img id="logo" src={SR_Logo} alt="" />
            <div>
                <h2>OTP</h2>
                <div>
                    <label>OTP -</label>
                    <input type="tel" maxLength={6} placeholder="OTP" onChange={(e)=>setOtpNumber(e.target.value)} />
                </div>
                <button  id="sign-in-r-btn" onClick={verifyOtp}>Verify</button>
            </div>
        </div>
    </>
    )
}
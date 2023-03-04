import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgetPassword, signInWithEmail } from "../redux/auth/action";
import "../style/auth.css"
import SR_Logo from "../Images/SR_Logo.png";


export function ForgetPassword()
{
    // react hooks-
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store)=>store.authReducer);

    // destructure-
    const {forgetPasswordResponse, isLoading} = data


    // sign in function-
    const forgetPasswordHandler = ()=> {
        const sendData = {email, password1, password2}
        dispatch(forgetPassword(sendData))
    }

    console.log(forgetPasswordResponse);
    if(forgetPasswordResponse.message)
    {
        navigate("/auth/sign-in-email");
    }

        
    // return statement-
    return (
        <>
            <div id="sign-in-with-email">
                <img id="logo" src={SR_Logo} alt="" />
                <div>
                    <h2>Forget Password</h2>
                    <div>
                        <label>Email -</label>
                        <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>New Password -</label>
                        <input type="password" placeholder="New password" value={password1} onChange={(e)=>setPassword1(e.target.value)} />
                    </div>
                    <div>
                        <label>Retype Password -</label>
                        <input type="password" placeholder="Retype password" value={password2} onChange={(e)=>setPassword2(e.target.value)} />
                    </div>
                    <button  id="sign-in-r-btn" onClick={forgetPasswordHandler}>{isLoading === true ? "...wait" : "Submit"}</button>
                    <Link to={"/auth/sign-in-email"} style={{display:"block", margin:"1rem auto 0 auto", textAlign:"center"}}>Go Back</Link>
                </div>
            </div>
        </>
    );
}
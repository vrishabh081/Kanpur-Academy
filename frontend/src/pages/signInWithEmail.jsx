import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmail } from "../redux/auth/action";
import "../style/auth.css"
import SR_Logo from "../Images/SR_Logo.png";


export function SignInWithEmail()
{
    // react hooks-
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store)=>store.authReducer);

    // destructure-
    const {emailSignInResponse, isLoading} = data


    // sign in function-
    const emailSignInHandler = ()=> {
        const sendData = {email, password}
        dispatch(signInWithEmail(sendData))
    }


    // handle response and error
    useEffect(()=>{
        if(emailSignInResponse.error)
        {
            alert(emailSignInResponse.error);
        }
        else if(emailSignInResponse.message)
        {
            sessionStorage.setItem("token", (emailSignInResponse.token));
            sessionStorage.setItem("name", (emailSignInResponse.name));
            sessionStorage.setItem("otp", JSON.stringify(emailSignInResponse.otp))
            alert(emailSignInResponse.message);
            navigate("/auth/verify-otp");
        }
        }, [emailSignInResponse])

        
    // return statement-
    return (
        <>
            <div id="sign-in-with-email">
                <img id="logo" src={SR_Logo} alt="" />
                <div>
                    <h2>Log in</h2>
                    <div>
                        <label>Email -</label>
                        <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password -</label>
                        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button  id="sign-in-r-btn" onClick={emailSignInHandler}>{isLoading === true ? "...wait" : "Sign in"}</button>
                    <Link to={"/auth/forget-password"} style={{display:"block", margin:"1rem auto 0 auto", textAlign:"center"}}>Forget password ?</Link>
                </div>
            </div>
        </>
    );
}
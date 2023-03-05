import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmail, signUpFun } from "../redux/auth/action";
import "../style/auth.css"
import SR_Logo from "../Images/SR_Logo.png";


export function SignUp()
{
    // react hooks-
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let data = useSelector((store)=>store.authReducer);

    // destructure-
    let {signUp, isLoading} = data
    console.log(data);


    // sign in function-
    const signUpHandler = ()=> {
        const sendData = {name, phone, email, password}
        dispatch(signUpFun(sendData))
    }


    // handle response and error
    useEffect(()=>{
        if(signUp.message)
        {
            navigate("/auth/sign-in-email");
        }
        }, [signUp, data])

    //     data = {};

        
    // return statement-
    return (
        <>
            <div id="sign-in-with-email">
                <img id="logo" src={SR_Logo} alt="" />
                <div>
                    <h2>Sign up</h2>
                    <div>
                        <label>Name -</label>
                        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Phone -</label>
                        <input type="tel" maxLength={10} placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label>Email -</label>
                        <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password -</label>
                        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button  id="sign-in-r-btn" onClick={signUpHandler}>{isLoading === true ? "...wait" : "Sign up"}</button>
                    <Link to={"/auth/sign-in-email"} style={{display:"block", margin:"1rem auto 0 auto", textAlign:"center"}}>Already have an account ?</Link>
                </div>
            </div>
        </>
    );
}
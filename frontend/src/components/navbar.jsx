import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import SR_Logo from "../Images/SR_Logo.png";
import "../style/navabar.css";
import { SearchBox } from "./search";

export const Navbar = ()=>{
    const navigate = useNavigate();

    // hamburger-
    const openSidebar = ()=>{
        document.querySelector(".sidebar").classList.add("open-sidebar")
        document.querySelector(".sidebar-body-background").classList.add("show-body-background");
    }

    const closeSidebar = ()=>{
        document.querySelector(".sidebar").classList.remove("open-sidebar");
        document.querySelector(".sidebar-body-background").classList.remove("show-body-background");
    }

    // sign out-
    const signOut = ()=>{
        localStorage.clear();
        alert("Successfully Logged Out");
        window.location.reload(true);
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
            <div id="navbar">
                <div id="left-section">
                    <img src={SR_Logo} alt="" />
                </div>
                <SearchBox/>
                <div id="right-section">
                    <Link to="/">Home</Link>
                    <Link to="/addmission">New Addmission</Link>
                    <Link to="/accessories">Accessories</Link>
                    <Link to="" onClick={signOut}>Sign Out</Link>
                </div>
                <div id="hamburger" onClick={openSidebar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* <!-- sidebar --> */}
            <div className="sidebar">
                <div>
                    <p className="sidebar-nav">
                        <Link to="/">Home</Link>
                    </p>
                    <p className="sidebar-nav">
                        <Link to="/addmission">New Addmission</Link>
                    </p>
                    <p className="sidebar-nav">
                        <Link to="/accessories">Accessories</Link>
                    </p>
                    <p className="sidebar-nav">
                        <Link to="" onClick={signOut}>Sign Out</Link>
                    </p>
                </div>
            </div>
            <div className="sidebar-body-background" onClick={closeSidebar}>
            </div>
        </>
    )
}
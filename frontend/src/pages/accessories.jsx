import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccessoriesCard } from "../components/accessoriesCard";
import { getAccessoreis } from "../redux/app/accessories/action";
import {Link, useNavigate} from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Accessories = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store)=>store.accessoreisReducer);
    const {payload, isLoading, isError} = data;

    useEffect(()=>{
        dispatch(getAccessoreis())
    }, [])

    // private route-
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            return navigate("/auth/sign-in-email")
        }
    }, [])

    if(isLoading)
    {
        return <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50vh"}} ><h1 id="loader">Please Wait...</h1></div>
    }

    return(
        <>
            <Navbar/>
            <div style={{marginTop:"6rem"}} >
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <h1 style={{textAlign:"center"}}>Accessories</h1>
                    <Link to={"/add-accessories"}><ion-icon name="add-circle-outline" id="create-accessories"></ion-icon></Link>
                </div>
                {payload?.map((accessories)=><AccessoriesCard key={accessories._id} accessories={accessories} />)}
            </div>
        </>
    )
}
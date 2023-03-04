import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { StudentsCard } from "../components/studentsCard";
import { getAllStudentsData } from "../redux/app/action";
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Home = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store)=>store.appReducer);
    const {payload, isLoading, isError} = data;

    // useEffect-
    useEffect(()=>{
        dispatch(getAllStudentsData());
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
            <div style={{marginTop:"6rem"}}>
                <h1 style={{textAlign:"center"}}>Kanpur Academy</h1>
                {payload?.map((students)=><StudentsCard key={students._id} students={students} isLoading={isLoading} />)}
            </div>
        </>
    )
}
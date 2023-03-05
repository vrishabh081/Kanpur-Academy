import {Routes, Route} from "react-router-dom";
import { AddAccesories } from "../components/addAccessories";
import { SingleStudent } from "../components/singleStudent";
import { Accessories } from "../pages/accessories";
import { AddmissionForm } from "../pages/addmissionForm";
import { EditAddmissionForm } from "../pages/editAddmissionForm";
import { ForgetPassword } from "../pages/forgetPassword";
import { Home } from "../pages/home";
import { Otp } from "../pages/otp";
import { SignInWithEmail } from "../pages/signInWithEmail";
import { SignUp } from "../pages/signup";

export const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path={"/"} element = {<Home/>} />
            <Route path={"/:_id"} element = {<SingleStudent/>} />
            <Route path={"/addmission"} element = {<AddmissionForm/>} />
            <Route path={"/edit/:_id"} element = {<EditAddmissionForm/>} />
            <Route path={"/accessories"} element = {<Accessories/>} />
            <Route path={"/add-accessories"} element = {<AddAccesories/>} />
            <Route path={"/auth/signup"} element = {<SignUp/>} />
            <Route path={"/auth/sign-in-email"} element = {<SignInWithEmail/>} />
            <Route path={"/auth/verify-otp"} element = {<Otp/>} />
            <Route path={"/auth/forget-password"} element = {<ForgetPassword/>} />
        </Routes>
    )
}
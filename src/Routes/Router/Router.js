import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import Register from "../../Pages/Register/Register";
import ReviewUser from "../../Pages/ReviewUser/ReviewUser";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<AllServices></AllServices>
            },
         
            {
                path:'/login',
                element:<LogIn></LogIn>

            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/review',
                element:<ReviewUser></ReviewUser>
            }
          
        ]
    },
])

export default router ;
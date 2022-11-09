import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import AllServices from "../../Pages/AllServices/AllServices";
import ErrorRoute from "../../Pages/ErrorRoute/ErrorRoute";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import Register from "../../Pages/Register/Register";
import ReviewUser from "../../Pages/ReviewUser/ReviewUser";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import UnknownUser from "../../Pages/UnknownUser/UnknownUser";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorRoute></ErrorRoute>,
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
                path:'/addservice',
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
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
                element:<PrivateRoute><ReviewUser></ReviewUser></PrivateRoute>
            },
            {
                path:'/unknownUser',
                element:<UnknownUser></UnknownUser>
            }
          
        ]
    },
])

export default router ;
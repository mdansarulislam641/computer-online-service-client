import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import GoogleSignIn from '../../Shared/GoogleSignIn/GoogleSignIn';

const LogIn = () => {
    useTitle('login')
    const {logInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handleLogIn =(event) =>{
        event.preventDefault()
        const form = event.target ;
        const email = form.email.value ;
        const password = form.password.value 
        handleUserLogIn(email,password)

    }

  

    const handleUserLogIn = (email,password) =>{
        logInUser(email,password)
        .then(result=>{
            
            const user = result.user ;
            const currentUser = {
                email:user.email
            }
            // console.log(currentUser)
            fetch('https://assignment-server-omega.vercel.app/jwt',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                const token = data.token ;
                localStorage.setItem('online-service',JSON.stringify(token))
            })
            toast.success(`successfully login ${result?.user?.displayName}`);
            navigate(from, {replace:true})
            // console.log(location)
        })
        .catch(e=>{
            console.log(e.message, e.status)
        })
    }

    return (
        <div className="mx-auto my-10 p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleLogIn} className="space-y-6" action="#">
            <h5 className="text-2xl text-center font-medium text-gray-900 dark:text-white">Log in to Online Service</h5>
          
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
            </div>
         
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">login account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Haven't account  <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Register</Link>
            </div>
        </form>
        <div className='text-center mt-5'>
            <GoogleSignIn></GoogleSignIn>
        </div>
    </div>
    );
};

export default LogIn;
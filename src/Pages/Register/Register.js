import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaBeer, FaGoogle } from 'react-icons/fa';
const Register = () => {
    const {loading,userRegister,UpdateUserProfile,googleSignIn} = useContext(AuthContext)
    const [userInfo , setUserInfo] = useState({
        name:"",
        pictureURL:"",
        email:"",
        password:""
    })
    const [userError, setUserError] = useState({
        name:"",
        pictureURL:"",
        email:"",
        password:""
    });
    const navigate = useNavigate()
    if(loading){
        return <div>Loading.........</div>
    }

    const handleGoogleSign = () =>{
        googleSignIn()
        .then(result=>{
            toast.success(`Successfully login ${result.user.displayName}`)
            console.log(result.user)
            navigate('/');
        })
        .catch(e=>{
            toast.error(e.message)
        })
    }

    const handleRegister = event =>{
        event.preventDefault()
        userRegister(userInfo.email,userInfo.password)
        .then(result=>{
            toast.success("added user name and picture")
            updateProfile(userInfo.name, userInfo.pictureURL)
            navigate('/');
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
const handleUserName =(e)=>{
    const name =e.target.value;
    if(!name){
        setUserError({...userError,name:'Please Fill Up name'})
        setUserInfo({...userInfo,name:""})
    }
  else{
    setUserInfo({...userInfo,name})
    setUserError({...userError,name:''})
  }
}
const handleUserImage =(e)=>{
    const pictureURL = e.target.value;
    if(!pictureURL){
        setUserError({...userError,pictureURL:"Please Fill this image filed"})
        setUserInfo({...userInfo,pictureURL:""})
    }
    else{
        setUserInfo({...userInfo,pictureURL})
        setUserError({...userError,pictureURL:""})
    }
  
}

const handleUserEmail =(e)=>{
    const email = e.target.value;
    if(!/\S+@\S+\.\S+/.test(email)){
        setUserError({...userError, email:"Your email is not Correct"})
        setUserInfo({...userInfo, email:''})
    }
    else{
        setUserInfo({...userInfo,email})
        setUserError({...userError,email:''})
    }
  
}
const handleUserPassword =(e)=>{
    const password = e.target.value ;
    if(!/(?=.*[A-Z])/.test(password)){
        setUserError({...userError,password:"must be one capital letter"})
        setUserInfo({...userInfo,password:password })
    }
    else if(!/(?=.*[0-9])/.test(password)){
        setUserError({...userError,password:"must be one number"})
        setUserInfo({...userInfo,password:password })
    }
    else if(!/(?=.*[@#$%^&+-])/.test(password)){
        setUserError({...userError,password:"must be one spacial character"})
        setUserInfo({...userInfo,password:password })
    }
    else if(password.length < 6){
        setUserError({...userError,password:"password must be 6 character"})
        setUserInfo({...userInfo,password:password })
    }
    else{
        setUserInfo({...userInfo, password:password})
        setUserError({...userError,password:""})
    }
}
  

const updateProfile = (name,photo) =>{
    const profile = {displayName:name,photoURL:photo}
    UpdateUserProfile(profile)
    .then(()=>{
        toast.success("added user name and picture")
    })
    .catch((e)=>{
        toast.error(e.message)
    })
}


    return (
       
<div className="mx-auto my-10 p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form onSubmit={handleRegister} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to Genius Car</h5>
        <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
            <input onChange={handleUserName} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Md Ansarul Islam" required/>
        </div>
        <p className='text-red-800'>{userError.name && userError.name}</p>
        <div>
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Image URL</label>
            <input onChange={handleUserImage} type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Md Ansarul Islam" required/>
        </div>
        <p className='text-red-900'>{userError.pictureURL && userError.pictureURL}</p>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input onChange={handleUserEmail} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
           <p className='text-red-800'>{userError.email && userError.email}</p>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input  onChange={handleUserPassword} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <p className='text-red-700'>{userError.password && userError.password}</p>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register account</button>
        <div className="text-xl font-medium text-gray-500 dark:text-gray-300">
            Already account  <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">login</Link>
        </div>
    </form>
        <div className='text-center'>
            <button onClick={handleGoogleSign} className='text-5xl text-blue-600'><FaGoogle></FaGoogle> </button>
        </div>
</div>

    );
};

export default Register;
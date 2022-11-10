import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const GoogleSignIn = () => {
    const {user, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/' ;
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{

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
            navigate(from,{replace:true})
        })
        .catch(e=>{
            toast.error(e.message)
        })
    }


    return (
        <div>
             
             <button onClick={handleGoogleSignIn} className='text-3xl text-blue-600'><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default GoogleSignIn;
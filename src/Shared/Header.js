import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assests/servicelogo.jpg'
const Header = () => {
  const {user,signOutUser} = useContext(AuthContext)
  const [toggle, setToggle] = useState(true)
  const handleSignOut = ()=>{
      signOutUser()
      .then(result=>{
        toast.success(`Successfully log Out`)
      })
      .catch(e =>
       toast.error(e.message)
        )
  }
    return (
        
<nav className=" bg-[#283d6b] sticky top-0 z-10 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
  <div className="container max-w-[1300px]  flex justify-between items-center mx-auto">
  <Link  to='/' className="flex items-center">
    <img className='lg:w-[100px] md:w-[75px] w-[50px] h-[50px] rounded-lg mr-2' src={logo} alt="" />
      <span className="self-center text-white font-extrabold font-mono whitespace-nowrap dark:text-white lg:text-3xl text-2xl">Online Service</span>
  </Link>

<div>
  {toggle ? <p onClick={()=>setToggle(!toggle)} className='lg:hidden text-white block transition-all ease-in duration-500'><FaBars className='text-3xl'></FaBars></p>: <p onClick={()=>setToggle(!toggle)} className='lg:hidden text-white block transition-all ease-in duration-500'><FaTimes className='text-3xl'></FaTimes></p>}

{toggle? "" :  <div className="lg:hidden  block transition-all ease-in duration-500 text-center">
    <ul className="absolute transition-all ease-in duration-500 top-[55px] left-[0] py-10 flex flex-col justify-center gap-3 w-full text-white bg-[#717b91] items-center">
    <li className='mt-5'> {
        user && user?.photoURL ? <img title={user?.displayName}  className='h-[40px] rounded-full inline-block ml-5' src={user.photoURL} alt="" /> : <img 
                  className='h-[40px] rounded-full inline-block ml-5 tooltip tooltip-open tooltip-bottom' data-tip={user?.displayName} src='https://i.ibb.co/MnGKtKm/download.jpg' alt="" />} </li>
      <li>
        <Link to='/home' className='text-xl' aria-current="page">Home</Link>
      </li>
      <li>
        <Link to='/services' className='text-xl'>services</Link>
      </li>
      <li className='text-xl'><Link to='/blog'>Blog</Link></li>
   
  {
      user?.email ? <> <li className='text-xl'><Link to='/review'>My Reviews</Link></li>
      <li className='text-xl'><Link to='/addservice'>Add Service</Link></li>
       <li>
     { user?.displayName && <p className='text-xl'>{user.displayName}</p>}
     </li>
      <li className='text-xl'><button className='btn btn-primary' onClick={handleSignOut}>SignOut</button></li> </>
      
      :
      <>
       <li>
        <Link to='/login' className='text-xl'>Login</Link>
      </li>
      <li>
        <Link to="/register" className='text-xl'>Register</Link>
      </li>
      </>
     }
      
    </ul>
  </div>}
</div>
  <div className="hidden lg:block">
    <ul className="flex gap-4 text-white items-center">
     
      <li>
        <Link to='/home' className='text-xl' aria-current="page">Home</Link>
      </li>
      <li>
        <Link to='/services' className='text-xl'>services</Link>
      </li>
      <li className='text-xl'><Link to='/blog'>Blog</Link></li>
   
  {
      user?.email ? <> <li className='text-xl'><Link to='/review'>My Reviews</Link></li>
      <li className='text-xl'><Link to='/addservice'>Add Service</Link></li>
     

       <li>
     { user?.displayName && <p className='text-xl'>{user.displayName}</p>}
     </li>
      <li className='text-xl'><button className='btn btn-primary' onClick={handleSignOut}>SignOut</button></li> <li> {
        user && user?.photoURL ? <img title={user?.displayName}  className='h-[40px] rounded-full inline-block ml-5' src={user.photoURL} alt="" /> : <img 
                  className='h-[40px] rounded-full inline-block ml-5 tooltip tooltip-open tooltip-bottom' data-tip={user?.displayName} src='https://i.ibb.co/MnGKtKm/download.jpg' alt="" />} </li></>
      
      :
      <>
       <li>
        <Link to='/login' className='text-xl'>Login</Link>
      </li>
      <li>
        <Link to="/register" className='text-xl'>Register</Link>
      </li>
      </>
     }
      
    </ul>
  </div>
  </div>
</nav>


    );
};

export default Header;
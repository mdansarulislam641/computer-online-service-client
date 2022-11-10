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
console.log(toggle)
    return (
        
<nav className="bg-red-300 sticky top-0 z-10 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
  <div className="container max-w-[1300px]  flex justify-between items-center mx-auto">
  <Link  to='/' className="flex items-center">
    <img className='w-[100px] h-[50px] rounded-lg mr-2' src={logo} alt="" />
      <span className="self-center  font-extrabold font-mono whitespace-nowrap dark:text-white text-3xl">Online Service</span>
  </Link>

<div>
  {toggle ? <p onClick={()=>setToggle(!toggle)} className='lg:hidden block transition-all ease-in duration-500'><FaBars className='text-3xl'></FaBars></p>: <p onClick={()=>setToggle(!toggle)} className='lg:hidden block transition-all ease-in duration-500'><FaTimes className='text-3xl'></FaTimes></p>}

{toggle? "" :  <div className="lg:hidden  block transition-all ease-in duration-500 text-center">
    <ul className="absolute transition-all ease-in duration-500 top-[55px] left-[0] py-10 flex flex-col justify-center gap-3 w-full bg-red-500 items-center">
    <li className='mt-5'> {
        user && user?.photoURL ? <img title={user?.displayName}  className='h-[40px] rounded-full inline-block ml-5' src={user.photoURL} alt="" /> : <img 
                  className='h-[40px] rounded-full inline-block ml-5 tooltip tooltip-open tooltip-bottom' data-tip={user?.displayName} src='https://i.ibb.co/MnGKtKm/download.jpg' alt="" />} </li>
      <li>
        <Link to='/home' className="block text-xl py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to='/services' className="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">services</Link>
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
        <Link to='/login'className="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
      </li>
      <li>
        <Link to="/register" className="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</Link>
      </li>
      </>
     }
      
    </ul>
  </div>}
</div>
  <div className="hidden lg:block">
    <ul className="flex gap-4 items-center">
     
      <li>
        <Link to='/home' className="block text-xl py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to='/services' className="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">services</Link>
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
        <Link to='/login'className="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
      </li>
      <li>
        <Link to="/register" className="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</Link>
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
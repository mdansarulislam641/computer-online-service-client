import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Header = () => {
  const {user,signOutUser} = useContext(AuthContext)
  
  const handleSignOut = ()=>{
      signOutUser()
      .then(result=>{
        toast.success(`Successfully log Out ${result.user.displayName}`)
      })
      .catch(e =>
       toast.error(e.message)
        )
  }

    return (
        
<nav className="bg-red-300 sticky top-0 z-10 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container max-w-[1300px]  flex flex-wrap justify-between items-center mx-auto">
  <Link  to='/' className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Online Service</span>
  </Link>


  <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex items-center flex-col p-1 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to='/home' className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to='/services' className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">services</Link>
      </li>
     {
      user?.email ? <button onClick={handleSignOut}>SignOut</button> :
      <>
       <li>
        <Link to='/login'className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
      </li>
      <li>
        <Link to="/register" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</Link>
      </li>
      </>
     }
        <li>
          {user?.displayName ? <img className='w-[50px] rounded-full' src={user?.displayName} alt="" />:  <img className='w-[50px] rounded-full' src="https://i.ibb.co/NKTJrSQ/images.png" alt="images" border="0" />
          }
       
      </li>
    </ul>
  </div>
  </div>
</nav>


    );
};

export default Header;
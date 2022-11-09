import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Header = () => {
  const {user,signOutUser} = useContext(AuthContext)
  
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
        
<nav className="bg-red-300 sticky top-0 z-10 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container max-w-[1300px]  flex flex-wrap justify-between items-center mx-auto">
  <Link  to='/' className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center  font-extrabold font-mono whitespace-nowrap dark:text-white text-3xl">Online Service</span>
  </Link>


  <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex items-center gap-5 flex-col py-1 mt-4  rounded-lg border border-gray-100 md:flex-row  md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
      <li>
        <Link to='/home' className="block text-xl py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to='/services' className="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">services</Link>
      </li>
   
  {
      user?.email ? <> <li className='text-xl'><Link to='/reviews'>My Reviews</Link></li>
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
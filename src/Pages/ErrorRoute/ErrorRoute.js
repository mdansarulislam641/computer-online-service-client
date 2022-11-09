import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorRoute = () => {
    const {statusText,status,statusMessage} = useRouteError()
    return (
        <div className='text-center h-[100vh] flex justify-center items-center'>
            <h2 className='text-5xl'>OPP'S Page {statusText} <br />
            {status}
            <br />
            {statusMessage}
            
            <p>Continue to <Link className='text-blue-800 underline' to='/home'>home</Link></p>
            </h2>
        </div>
    );
};

export default ErrorRoute;
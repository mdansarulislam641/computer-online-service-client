import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UnknownUser = () => {
    useTitle('unknownuser')
    return (
        <div className='h-[62vh] flex items-center justify-center'>
            <h1 className='text-3xl text-center '>403 <br /> OPP'S <br /> You Are A Not valid User , <br /> If will you want to Review this service Please <Link className='text-2xl underline link-hover text-blue-800' to='/login'>Log in</Link> First </h1>
        </div>
    );
};

export default UnknownUser;
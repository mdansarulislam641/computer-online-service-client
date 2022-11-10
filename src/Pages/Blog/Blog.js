import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('blogs')
    return (
        <div className='bg-base-200 '>
           <div className='max-w-[1300px] bg-gray-300 mx-auto px-5 py-10'>
            <h1 className='text-center text-4xl bg-blue-500 py-3'>Difference between SQL and NoSQL</h1>
            <div>
                <h3 className='text-center text-4xl mt-5'>SQL</h3>
                <p className='text-xl'>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.</p>
            </div>
            <div>
                <h3 className='text-4xl text-center'>NO SQL</h3>
                <p className='text-xl'>The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.</p>            </div>
           </div>

           <div className='bg-gray-400 max-w-[1300px] py-10 mx-auto px-5'>
            <h3 className='text-center text-4xl bg-blue-500 py-3'>What is JWT, and how does it work?</h3>
            <p className='text-xl text-white mt-3'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
           </div>

           <div className='max-w-[1300px] bg-gray-300 mx-auto px-5 py-10'>
            <h2 className='text-4xl text-center bg-blue-400 py-3'>What is Different Between NodeJs And Javascript</h2>
            <p className='text-xl mt-5'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
           </div>

           <div className='max-w-[1300px] bg-gray-700 mx-auto px-5 py-10'>
            <h2 className='text-4xl  bg-blue-400 py-3 text-center'>How does NodeJS handle multiple requests at the same time?</h2>
            <p className='text-xl text-white mt-5'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. 

How NodeJS handle multiple client requests?

NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
           </div>
        </div>
    );
};

export default Blog;
import React from 'react';

const AddServices = () => {
    const handleSubmitService = (event)=>{
        event.preventDefault()
        const serviceTitle = event.target.serviceName.value ;
        const price = event.target.price.value ;
        const image = event.target.image.value ;
        const description = event.target.description.value ;
        const serviceInfo ={
            name:serviceTitle,
            price,
            img:image,
            description
        }

    }


    return (
        <div className='max-w-[1300xpx] py-20 mx-20 bg-blue-400 text-center'>
            <h2 className='lg:text-4xl text-2xl text-white font-extrabold font-mono py-3'>Add Your OWN Service Here</h2>
         <div>
         <form onSubmit={handleSubmitService} className='shadow-2xl'>
           <div>
           <input  className='border-2 shadow-white border-red-300 w-1/3 py-3 px-3 font-bold my-3 rounded-lg' type="text" name="serviceName" placeholder='Enter Service Name here...' id="" required />
           </div>
           <div>
           <input  className='border-2 border-red-300 w-1/3 py-3 px-3 font-bold my-3 rounded-lg' type="text" name='price' placeholder='Enter Service Fee...' required />
           </div>
           <div>
           <input className='border-2 border-red-300 w-1/3 py-3 px-3 font-bold my-3 rounded-lg' type="text" name='image' placeholder='Enter a photoURL....' required />
           </div>
           <div>
           <textarea  className='border-2 border-red-300 w-1/3 py-3 px-3 font-bold my-3 rounded-lg' name="description" placeholder='Service Description Here....' id="" cols="30" rows="10"></textarea>
           </div>
           <div>
            <button type='submit' className='btn btn-primary my-5'>Submit service</button>
           </div>
           </form>
         </div>
        </div>
    );
};

export default AddServices;
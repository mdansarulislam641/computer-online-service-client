import { TimelineTitle } from 'flowbite-react/lib/esm/components/Timeline/TimelineTitle';
import React from 'react';

const OrderTable = ({order}) => {
   const {title, name, price, email, phone,img} = order ;
    return (
       
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={img} className='w-[100px] rounded-lg' alt="" />
                </th>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {title}
                </th>
                <td class="py-4 px-6">
                   {name}
                </td>
                <td class="py-4 px-6">
                   {phone}
                </td>
                <td class="py-4 px-6">
                   {price}
                </td>
                <td class="py-4 px-6">
                    <a href="/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>

    );
};

export default OrderTable;
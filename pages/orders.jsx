import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {data} from '../data/data'
import { CgProfile } from 'react-icons/cg'

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>

      <div className='bg-white flex justify-between p-5 px-4 pt-4 border rounded-lg ml-4 mr-4'>
        <h2 className='font-bold text-3xl'>Orders</h2>
        <div className='flex justify-between items-center cursor-pointer '>
          <h2 className='pr-2 hidden sm:grid '>Welcome Again, Abik </h2>
          < CgProfile size={30} className='text-purple-800'/>
        </div>
      </div>

      <div className='p-4'>
        <div className='p-4 bg-white w-full m-auto border rounded-lg overflow-y-auto'>
          <div className='p-2 my-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Order</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order,id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center items-center cursor-pointer'>

                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800'/>
                  </div>

                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>${order.total.toLocaleString()}</p>
                    <p className='text-gray-800 text-sm'>{order.name.first}</p>
                  </div>              
                </div>

                <p className='text-gray-600 sm:text-left text-right'>
                  <span className={
                    order.status == 'Processing' 
                    ? 'bg-yellow-200 p-2 rounded-lg' 
                    : order.status == 'Completed' 
                    ? 'bg-green-200 p-2 rounded-lg' 
                    : 'bg-red-200 p-2 rounded-lg'
                  }>{order.status}</span>
                </p>

                <p className='hidden md:flex'>{order.date}</p>

                <div className='items-center sm:flex hidden justify-between'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical className=''/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default orders
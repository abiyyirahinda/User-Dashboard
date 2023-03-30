import React from 'react'
import {BsPersonFill, BsPersonFillAdd, BsThreeDotsVertical} from 'react-icons/bs'
import {data} from '../data/data'
import { CgProfile } from 'react-icons/cg'


const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>

        <div className='bg-white flex justify-between p-5 px-4 pt-4 border rounded-lg ml-4 mr-4'>
            <h2 className='font-bold text-3xl'>Customers</h2>
            <div className='flex justify-between items-center cursor-pointer '>
                <h2 className='pr-2 hidden sm:grid '>Welcome Again, Abik </h2>
                < CgProfile size={30} className='text-purple-800'/>
            </div>
        </div>

        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Name</span>
                    <span className='text-right sm:text-left'>Email</span>
                    <span className='hidden md:grid'>Last Order</span>
                    <span className='hidden sm:grid'>Method</span>
                </div>
                <ul>
                    {data.map((order, id) => (
                        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <div className='flex items-center'>

                                <div className='bg-purple-100 p-3 rounded-lg'>
                                    <BsPersonFill className='text-purple-800'/>
                                </div>

                                <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                            <p className='hidden md:flex'>{order.date}</p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>{order.method}</p>
                                <BsThreeDotsVertical />
                            </div>
                        </li>
                        
                    ))}
                </ul>
            </div>

        </div>

    </div>
  )
}

export default customers
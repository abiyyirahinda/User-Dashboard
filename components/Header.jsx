import React from 'react'
import {CgProfile} from 'react-icons/cg'
const Header = () => {
  return (
    <div className='bg-white flex justify-between p-5 px-4 pt-4 border rounded-lg ml-4 mr-4'>
        <h2 className='font-bold text-3xl'>Dashboard</h2>
        <div className='flex justify-between items-center cursor-pointer '>
          <h2 className='pr-2 hidden sm:grid '>Welcome Again, Abik </h2>
          < CgProfile size={30} className='text-purple-800'/>
        </div>
        
    </div>
  )
}

export default Header
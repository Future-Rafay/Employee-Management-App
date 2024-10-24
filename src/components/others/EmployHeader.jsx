import React from 'react'

const EmployHeader = ({data}) => {

 
  
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello , <br /> <span className='text-3xl font-semibold'>{data.name} 👀🙌</span></h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium hover:bg-red-800'>Log Out</button>
    </div>
  )
}

export default EmployHeader;
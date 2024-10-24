import React from 'react'
import EmployHeader from '../others/EmployHeader';
import EmployTaskNumbers from '../others/EmployTaskNumbers';
import TaskList from '../TaskList/TaskList';

const EmpolyeeDashboard = ({data}) => {

  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <EmployHeader data={data}/>
        <EmployTaskNumbers data={data}/>
        <TaskList data={data} />
    </div>
  )
}

export default EmpolyeeDashboard;
import React from 'react'
import Header from '../others/Header';
import TaskNumbers from '../others/TaskNumbers';
import TaskList from '../TaskList/TaskList';

const EmpolyeeDashboard = ({data}) => {

  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskNumbers data={data}/>
        <TaskList data={data} />
    </div>
  )
}

export default EmpolyeeDashboard;
import React from 'react'
import Header from '../others/Header';
import TaskNumbers from '../others/TaskNumbers';
import TaskList from '../TaskList/TaskList';

const EmpolyeeDashboard = (props) => {
  // console.log(props.data)

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser}  data={props.data}/>
        <TaskNumbers data={props.data}/>
        <TaskList  data={props.data} />
    </div>
  )
}

export default EmpolyeeDashboard;
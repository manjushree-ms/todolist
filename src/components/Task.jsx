import React, { useState } from 'react'
import "../App.css"

function Task({task,desc,handldel,ind}) {
    
    
  return (
    
    <div className='task-container'>
        <h1>{task}</h1>
        <p>{desc}</p>
        <button className='delete-button' onClick={()=>handldel(ind)}>Delete</button>
        </div>
        
  )
}

export default Task
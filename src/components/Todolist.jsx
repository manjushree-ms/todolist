import React from 'react'
import { useState } from 'react'
import Task from './Task';
import '../App.css'
import catMeow from '../assets/mixkit-sweet-kitty-meow-93.wav'
import catang from '../assets/mixkit-domestic-cat-hungry-meow-45.wav'
function Todolist() {
    const[task,settask]=useState([]);
    const[newtask,setnewtask]=useState("");
    const[currentdesc,setdesc]=useState("");
    const[descp,setdescp]=useState([]);
    function handleinpchange(event)
    {setnewtask(event.target.value);
    }
    function handledesc(event)
    {
      setdesc(event.target.value);
    }
    function add()
    {const audio = new Audio(catMeow);
    audio.play();
     settask((prev)=>
    [...prev,newtask])
      setdescp((prev)=>
    [...prev,currentdesc])
    setnewtask("")
    setdesc("")

    }
    function deletetask(ind)
    {const audio = new Audio(catang);
    audio.play();
        settask(prev => prev.filter((_, i) => i !== ind));
  setdescp(prev => prev.filter((_, i) => i !== ind));
      
    }

  return (
   <>
   <div className='todolist'>
    <div className='input'>
        <input type='text'
         placeholder='enter the task'
         value={newtask}
         onChange={handleinpchange} ></input>
         <input type='text'
          placeholder='enter description'
           onChange={handledesc}
            value={currentdesc}></input>
         <button className='add-button' onClick={add} disabled={newtask.trim() === "" || currentdesc.trim() === ""}>ADD</button>
    </div>
    {task.map((t,index)=>(
        <Task key={index} task={t} desc={descp[index]} handldel={deletetask} ind={index}/>))}
   </div>
   

   
   </>
  )
}

export default Todolist
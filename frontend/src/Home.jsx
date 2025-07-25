import React, { useEffect } from 'react'
import Create from './Create'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

const Home = () => {
    const [todos, settodos] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=>settodos(result.data))
        .catch(err=>console.log(err))
    },[])
    const handleEdit=(id)=>{
        axios.put('http://localhost:3001/update/'+id)
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <h2>TODO LIST</h2>
        <Create />
        {
            todos.length === 0 ? <div><h2>No Record</h2></div> 
            :
            todos.map(todo=>(
                <div className='task' key={todo._id || todo.id}>
                    <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
                        {todo.done ? <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                        : <BsCircleFill className='icon'></BsCircleFill>
                        }
                        <p> {todo.task}</p>
                    </div>
                   <div>
                    <span><BsFillTrashFill className='icon' /></span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home
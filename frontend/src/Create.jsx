import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [task, settask] = useState('')
  const handleAdd =()=>{
      axios.post('http://localhost:3001/add',{task:task})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  return (
    <div>
        <input type='text' placeholder='Enter Task' onChange={(e)=>{settask(e.target.value)}} />
        <button type='button' onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default Create
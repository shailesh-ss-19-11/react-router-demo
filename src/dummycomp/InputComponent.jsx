import React, { useState } from 'react'
import ExtraComponent from './ExtraComponent'

const InputComponent = ({children}) => {
  const [input,setinput] = useState("")
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
      {children}
      

    </div>
  )
}

export default InputComponent

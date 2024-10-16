
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
 
  const[val,setVal] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        <input onChange={(e)=>{
          setVal(e.target.value)
        }} value={val}></input>
        <h1>Hello {val}</h1>
    </div>
  )
}

export default App

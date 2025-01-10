import React from 'react'

const ChildComponent1 = ({setSelectedOption}) => {
  return (
    <div><h3>ChildComponent1</h3>
        <button onClick={()=>setSelectedOption("option 1")}>Option 1</button></div>
  )
}

export default ChildComponent1

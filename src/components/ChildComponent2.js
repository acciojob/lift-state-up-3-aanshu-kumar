import React from 'react'

const ChildComponent2 = ({setSelectedOption}) => {
  return (
    <div>
        <h3>ChildComponent2</h3>
        <button onClick={()=>setSelectedOption("option 2")}>Option 2</button>
        </div>
  )
}

export default ChildComponent2

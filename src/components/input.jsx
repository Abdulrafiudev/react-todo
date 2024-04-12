import React from "react";


function Input_Area(props){

  return(
    <>
     
     <div className="form">
            <input type="text" onChange={props.change} value={props.name}/>
            <button onClick={props.add}>
              <span>Add</span>
            </button>
      </div>
    
    </>
  )
}

export default Input_Area
import React from "react";
import "../../public/styles.css"
import List from "./list";


function Todo(props){
  return(
    <>
      <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="form">
            <input type="text" onChange={props.change} value={props.name}/>
            <button onClick={props.add}>
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
              {props.items.map((item, index) => {
                return(
                  <List items = {item} key = {index} />
                )
              })}
              
            </ul>
            
          </div>
    </div>
    </>
  )
}

export default Todo
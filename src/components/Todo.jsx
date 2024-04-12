import React from "react";
import "../../public/styles.css"
import List from "./list";
import Input_Area from "./input";


function Todo(props){
  return(
    <>
      <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <Input_Area change = {props.change} name = {props.name} add = {props.add}/>
          <div>
            <ul>
              {props.items.map((item, index) => {
                return(
                  <List items = {item} key = {index} id = {index} delete = {props.delete}/>
                )
              })}
              
            </ul>
            
          </div>
    </div>
    </>
  )
}

export default Todo
import React from "react";
import { useState } from "react";


function List(props){

  let [text_decoration, set_text_decoration] = useState(false)

  function handle_click(){
    set_text_decoration((prev_value) => {

      return !prev_value

    })
  }
  return(
    <>
      
      <li onClick = {() => {
        props.delete(props.id)
      }} style={{textDecoration : text_decoration ? "line-through" : "none"}}> {props.items}</li>
      
    </>
  )
}

export default List
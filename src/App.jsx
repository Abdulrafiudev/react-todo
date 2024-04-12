import React, {useState} from "react";
import Todo from "./components/Todo";








function App() {

  let [input_text, set_input_text] = useState(``)
  let [todo_items, set_todo_items] = useState([])

  function handle_change(event){
     let input_value = event.target.value
     set_input_text(input_value)
  }

  function add_todo(){
    set_todo_items((prev_item) => {
       return(
        [
          ...prev_item,
          input_text
        ]
       )
    })
    
    set_input_text("")
  }
  return (
    <Todo change = {handle_change} add = {add_todo} items = {todo_items} name = {input_text}/>
  )
}

export default App;

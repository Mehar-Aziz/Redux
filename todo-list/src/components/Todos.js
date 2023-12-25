import React, { useState } from "React";
import store from "../app/store";
import { Connect } from "react-redux";

const Todo = (props)=>{
const[todo,setTodo] = useState("");

const handleChange =(e)=>{
    setTodo(e.target.value)
};

return(
    <div className="addTodos">
<input type="text"
onChange={(e) => handleChange(e)}
className="todo-input-field"
value={todo}
/>
<button className="add-btn">Add to list</button>
<br />
    </div>
);

};

export default connect(null,null)(Todos);
import React, { useState } from "React";
import store from "../app/store";
import { Connect } from "react-redux";
import { addTodos } from "../app/reducer";


const mapStateToProps = (state) => {
    return{
        todos:state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo:(obj)=>dispatch(addTodos(obj)),
    };
};

const Todo = (props)=>{
    console.log("props",props);

const[todo,setTodo] = useState("");

const add = () => {
    if(todo ===""){
        alert('Input cannot be Empty');
    }
    else{
        props.addTodo({
            id:Math.floor(Math.random()*1000),
            item:todo,
            completed:false,
        });
        setTodo("");
    }
};

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

<ul>
    {props.todos.length > 0 && props.todos.map((item)=>{
        return <li key={item.id}>{item.item}</li>;
    })}
</ul>
    </div>
);

};


export default connect(mapStateToProps,mapDispatchToProps)(Todos);

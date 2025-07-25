import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todolist(){
    let styles={
        border:"5px solid white",
    }
    let [todos,setTodos]= useState([{task:"sample-task",id:uuidv4(),isDone: false}]); // Array of todo items. Each item is an object with a task and an id
    let [newTodo, setNewTodo]=useState(""); //string

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone: false}];
        });// Adds newTodo to the todos list
        setNewTodo(""); // Clears the input field
    }
    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);  //This function runs whenever the user types in the input field.                                        //It updates newTodo with the latest input value      
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=id));
    }

    let upperCaseAll=()=>{
        setTodos((prevTodos)=>

            {
            return prevTodos.map((todo)=>{
                return{...todo, task: todo.task.toUpperCase()};
        });
    });
    }


    let upperCaseOne=(id)=>{
        setTodos((prevTodos)=>{
                return prevTodos.map((todo)=>{
                if(todo.id==id){
                    return {...todo, task: todo.task.toUpperCase()}
                }
                else{
                    return todo;
                }
            });
        });
    };

    let markAsDone=(id)=>{
        setTodos((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id==id){
                    return {...todo,isDone:!(todo.isDone)};
                }
                else{
                    return todo;
                }
            })
        })
    }
    


    return(
        <div style={styles}>
            <span><input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            &nbsp;&nbsp;
            <button onClick={addNewTask}>Add task</button></span>
            <br></br>
            <br></br>
            <br></br>         
            <hr></hr>
            <h4>tasks to do</h4>
            <ul>
                {
                    todos.map((todo)=>{
                        return(
                        <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                            {todo.task}</span>
                        &nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;
                        <button onClick={()=>upperCaseOne(todo.id)}>UpperCase</button>
                        &nbsp;&nbsp;
                        <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
                        </li>
                        )
                    })
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>

        </div>
    )

}
export default Todolist;
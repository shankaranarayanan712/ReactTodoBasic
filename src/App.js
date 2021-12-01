
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");
 
  const onTodoChange = (e) => {
    const val = e.target.value;
    if (val) setAddTodo(val);

  }

  const onSetTodo = (e) => {
    let todoList = [...todo];
    todoList.push(addTodo)
    setTodo(todoList)

  }

  const searchTodo = (e) => {
    const val = e.target.value;
    let todoList = [...todo];
    todoList = todoList.filter((todo) => {
      if (todo.includes(val)) {
        return todo;
      } else {
        return ''
      }
    });
      setFilteredTodo(todoList)
  }
// to be added in the event
  const removeTodo = (e) => {
    const val = e.target.value;
    let todoList = [...todo];
    todoList = todoList.filter((todo) => {
      return todo !== val
    });
    setTodo(todoList)
  }

  return (
    <div className="App">
      <input type="text"  onChange={(e) => { onTodoChange(e) }}/>
      <button onClick={() => { onSetTodo() }}>Submit</button>
      <input type="text"  onChange={(e) => { searchTodo(e) }}/>
      {filteredTodo && filteredTodo.length > 0 ?       
        <ul>
           Showing search filtered
          {filteredTodo.map((tod) => {
            return (
              <>
                <li > {tod}   </li> 
              </>
            )
            
          })}
        </ul>
          :
        <ul>
          Showing all Todos 
          {todo.map((tod) => {
            return (
              <>
                <li onClick={(e) => { removeTodo(e) }}> {tod}  x </li>
              </>
            )
            
          })}
        </ul>
} 
    </div>
  );
}

export default App;

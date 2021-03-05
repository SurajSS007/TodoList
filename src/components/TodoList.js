import React from 'react'
import Todo from "./Todo";
function TodoList({todos,setTodos}) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
            {
                todos.map((todo) => 
                    <Todo todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todos.id}
                     text={todo.text}
                     
                     />
                    )
            }
      
            </ul>
        </div>
    )
}

export default TodoList


      // <Todo text={todos} />

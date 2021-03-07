import React from 'react'

function Form({setInputText,todos,setTodos,inputText,setStatus}) {



    const inputTextHandler = (e) =>{
        // console.log(e.target.value);
        setInputText(e.target.value)
    }

    const submitEventHandler = (e) => {
        e.preventDefault()
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}
        ])
        setInputText("")
    }
    
    const statusHandler = (e) =>{
      // console.log(e.target.value)
      setStatus(e.target.value)
    }
    return (
        <div>
        <form>
        <input value={inputText} onChange={inputTextHandler}  type="text" className="todo-input" />
        <button onClick={submitEventHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" onClick={statusHandler} className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
        </div>
    )
}

export default Form

import React,{useState,useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
    const [inputText,setInputText] = useState("");
    const [todos,setTodos] = useState([])
    const [status,setStatus] = useState('all')
    const [filteredTodos,setFilteredTodos] = useState([])

      //Runs once
      useEffect(() => {
        getLocalTodos()
      }, [])

    useEffect(() => {
      filterHandler()
      saveLocalTodos()
    }, [status,todos])

    const filterHandler = () => {
        switch(status){
        case "completed" :
          setFilteredTodos(todos.filter(todo =>todo.completed == true))
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo =>todo.completed == false))
          break;
        default:
          setFilteredTodos(todos);
          break;
        }
      }


      const saveLocalTodos = ()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
      }

      const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
          localStorage.setItem('todos',JSON.stringify([]));
        }else{
          let todoLocal  = JSON.parse(localStorage.getItem('todos'));
          console.log(todoLocal);
          setTodos(todoLocal);
        }
      }
      



  return (
    <div className="App">
    <header>
    <h1>Suraj's Todo List</h1>
    </header>
    <Form setStatus={setStatus} setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
    <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

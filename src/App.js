import React,{useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
    const [inputText,setInputText] = useState("");
    const [todos,setTodos] = useState([])
  return (
    <div className="App">
    <header>
    <h1>Suraj's Todo List</h1>
    </header>
    <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

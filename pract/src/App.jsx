import { useState, useEffect } from 'react';
import Hello from "./Components/Container";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([])
  const [todoItems, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [todoId,setId] = useState("")

  

  function getTodoList(setTodo) {
    axios.get("http://localhost:3001/api")
      .then((result) => {
        console.log("data is", result.data);
        setTodo(result.data);
      })
      .catch((e) => console.log(e))
  };

  function addTodo(todoItems, setText, setTodo) {

    axios.post("http://localhost:3001/api/save", { todoItems })
      .then((data) => {
        console.log(data);
        setText("");
        getTodoList(setTodo)
      })

  };

  function updateTodo(todoItems,setText,setTodo,setUpdate,todoId){
    axios.put("http://localhost:3001/api/update/"+todoId,{_id:todoId,todoItems})
    .then((result)=>{
        setText("");
        setUpdate(false);
        getTodoList(setTodo)
    })
    .catch((e )=>console.log(e))
  }
  function updatemode(_id,todoItems){
    setUpdate(true)
    setText(todoItems)
    setId(_id)
  }
  function remove(todoId ,setTodo){
    axios.delete("http://localhost:3001/api/delete/"+todoId,{todoId})
    .then(result =>{
      getTodoList(setTodo)
    })
  }

  useEffect(() => {
    getTodoList(setTodo);
  },[])

  return (
    <>
      <div className="text-2xl bg-slate-500 text-center w-full h-min p-3">
        <h3 className='text-white'>TODO APP</h3>
      </div>
      <div className='flex justify-center mt-3 gap-3'>
        <input type='text' placeholder='Enter Todo here....' className='outline-none p-1 border-b-2 border-b-slate-500' value={todoItems} onChange={(e) => setText(e.target.value)} />
        <button className='border p-2 rounded-lg bg-cyan-600 text-white' onClick={update ? ()=>updateTodo(todoItems, setText, setTodo, setUpdate, todoId):() => addTodo(todoItems, setText, setTodo)}>
        {update? "update":"ADD"}
        </button>
      </div>
      <div className='flex justify-center items-center md:flex-wrap md:flex-row md:justify-around lg:justify-around mt-6 flex-col'>
        {todo.map((item) => <Hello key={item._id} text={item.todoItems} updatemode = {()=>updatemode(item._id,item.todoItems)} remove={()=>remove(item._id,setTodo)}/>)}

        {/* <Hello />
        <Hello />
        <Hello />
        <Hello /> */}
      </div>
    </>
  )
}

export default App

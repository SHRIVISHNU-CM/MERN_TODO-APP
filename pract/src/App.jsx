import { useState ,useEffect } from 'react';
import Hello from "./Components/Container";
import axios from "axios"
function App() {
  const [todo, setTodo] = useState([])
  const [todoItems,setText] = useState("");
const [update,setUpdate] = useState(false)

    const localURI = "http://localhost:3001/get";
    function getTodoList (setTodo){
      axios.get("http://localhost:3001/api")
        .then((result)=>{
          console.log("data is", result.data);
          setTodo( result.data);
        })
        .catch((e)=>console.log(e))
    }
  function addTodo(todoItems,setText,setTodo){
      
    axios.post("http://localhost:3001/api/save", { todoItems })
      .then((data)=>{
        console.log(data);
        setText("");
        getTodoList(setTodo)
      })

    }
    
    useEffect(()=>{
      getTodoList(setTodo);
    })

  return (
    <>
      <div className="text-2xl bg-slate-500 text-center w-full h-min p-3">
        <h3 className='text-white'>TODO APP</h3>
      </div>
      <div className='flex justify-center mt-3 gap-3'>
        <input type='text' placeholder='Enter Todo here....' className='outline-none p-1 border-b-2 border-b-slate-500' value={todoItems} onChange={(e)=>setText(e.target.value)}/>
        <button className='border p-2 rounded-lg bg-cyan-600 text-white' onClick={() => addTodo(todoItems,setText,setTodo)}>Add</button>
      </div>
      <div className='flex justify-center items-center md:flex-wrap md:flex-row md:justify-around lg:justify-around mt-6 flex-col'>
        {todo.map((item) => <Hello key={item._id} text={item.todoItems} />)}
        
        {/* <Hello />
        <Hello />
        <Hello />
        <Hello /> */}
      </div>
    </>
  )
}

export default App

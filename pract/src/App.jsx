import { useState } from 'react';


function App() {


  return (
    <>
    <div className="text-2xl bg-slate-500 text-center w-full h-min p-3">
        <h3>TODO APP</h3>
    </div>
    <div className='flex justify-center mt-3 gap-3'>
      <input type='text' placeholder='Enter Todo here....' className='outline-none p-1 border-b-2 border-b-slate-500'/>
      <button className='border p-2 rounded-lg bg-cyan-600'>Add</button>
    </div>
    </>
  )
}

export default App

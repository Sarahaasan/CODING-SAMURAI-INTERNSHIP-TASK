
import { useState , useEffect } from 'react'
import './App.css';
const App = () => {
const [counter, setcounter] = useState(() => {
  const savedCount = localStorage.getItem('count');
  try {
    return savedCount ? JSON.parse(savedCount) : 0;
  } catch {
    return 0;
  }
});

useEffect ( ( ) => 
{
 localStorage.setItem("count",JSON.stringify(counter))
}, [counter])
function increment ()
{
  setcounter(counter +1)
}
function decrement ()
{
  setcounter(counter -1)
}
function reset ()
{
  setcounter(0)
}

  return (
     <div className="min-h-screen flex justify-center items-center bg-[#242424]">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
        <p className="text-gray-800 text-2xl font-semibold">{counter}</p>
      <div>
      <button className='mr-4 mt-4 ' onClick={()=> increment() }>increment</button>
      <button  onClick={()=> decrement() }>decrement</button>
      </div>
      <button className='mt-4' onClick={()=> reset() }>reset</button>
      </div>
    </div>
  )
}

export default App

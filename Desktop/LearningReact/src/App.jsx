import React, { useState } from 'react'
import Togglecounter from './components/Togglecounter'


const App = () => {
  const [first, setfirst] = useState(0)
  const [isVisible, setisVisible] = useState(true)
  console.log(first)
  const  Increment = ()=>{
 setfirst(setfirst=>setfirst+1)
  }
   const  Decrement = ()=>{
 setfirst(setfirst=>setfirst-1)
  }
     const  Reset = ()=>{
 setfirst(0)
  }
  const Toggle = () =>{
setisVisible(prev => !prev)
  }
  return (
    <div>
      <button onClick={Toggle}>{isVisible? 'HideCounter' : 'ShowCounter'}

      </button>

    {
      isVisible &&(
        <>

        <Togglecounter value ={first}/>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </>
      )}
      
    </div>
  )
}

export default App
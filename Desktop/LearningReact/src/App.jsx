import React, { useEffect, useState } from 'react'
import Timer from './components/Timer'

const App = () => {
  const [time, settime] = useState(new Date())
  useEffect(()=>{
    const interval = setInterval(()=>{
      settime(new Date())
    },1000)
    return ()=> clearInterval(interval)
  },[])
  return (
    <div>
      <Timer time = {time}/>
      
    </div>
  )
}

export default App
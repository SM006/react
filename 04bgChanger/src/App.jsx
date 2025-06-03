
import React, { useState } from 'react'
function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen'
      style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-1'>
          <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-xl'>
            <button
            onClick={()=> setColor("red")}
            className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor: "Red", color: "white"}}>
              Red</button>

            <button
            onClick={()=> setColor("blue")}
            className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor: "blue", color: "white"}}>
              Blue</button>

              <button
              onClick={()=> setColor("green")}
            className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor: "green", color: "white"}}>
              Green</button>

              <button
              onClick={()=> setColor("pink")}
            className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor: "pink", color: "white"}}>
              Pink</button>

              <button
            onClick={()=> setColor("purple")}
            className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor: "purple", color: "white"}}>
              Purple</button>
          </div>
        </div>
    </div>
  )
}

export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)
//   return (

//     <div className='w-90 h-90 flex justify-evenly items-center flex-col rounded bg-slate-400'>
//       <h1 className='text-black-500 font-bold text-3xl'>Counter Application</h1>
//       <h2 className='text-black-500 font-bold text-2xl'>{count}</h2>
//       <div className='flex gap-4'>
//         <button onClick={() => {
//           setCount(count + 1)
//         }} className='p-1 w-30 border-1 rounded bg-green-600 text-taupe-950 hover:bg-green-700 cursor-pointer'>increase</button>
//         <button onClick={() => {
//           setCount(count - 1)
//         }} className='p-1 w-30 border-1 rounded bg-green-600 text-taupe-950 hover:bg-green-700 cursor-pointer'>decreaase</button>
//       </div>
//       <div className='flex gap-4'>
//         <button onClick={() => {
//           setCount(0)
//         }} className='p-1 w-30 border-1 rounded bg-green-600 text-taupe-950 hover:bg-green-700 cursor-pointer'>increase</button>
//       </div>
//     </div>
//   )
// }

// export default App






import React from 'react'
import { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1)
  }

  const decrementHandler = () => {
    setCount(count - 1)
  }

  const resetHandler = () => {
    setCount(0)
  }

  return (
    <div className='w-100 h-100 bg-emerald-500 flex flex-col items-center justify-evenly rounded'>
      <h1 className='text-4xl text-center'>Counter Application</h1>
      <h2 className='text-3xl'>{count}</h2>
      <div className='w-100 flex justify-evenly'>
        <button onClick={incrementHandler} className='w-25 h-10 bg-green-500 border-1 rounded'>Increment</button>
        <button onClick={decrementHandler} className='w-25 h-10 bg-red-500 border-1 rounded'>Decrement</button>
      </div>
      <div>
        <button onClick={resetHandler} className='w-25 h-10 bg-blue-400 border-1 rounded'>Reset</button>
      </div>
    </div>
  )
}

export default App

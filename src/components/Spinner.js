import React from 'react'
import "./Spinner.css";
const Spinner = () => {
  return (
    <div >
        <div className='spinner'></div>
        <p className='text-bgDark text-lg font-semibold'> Loading....</p>
    </div>
  )
}

export default Spinner
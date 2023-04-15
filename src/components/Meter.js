import React from 'react'

function meter() {
    function meterFunction(event){
        const mValue = event.target.value;
    }

  return (
    <div>
        <h2>meter</h2>
        <input type="text" onChange={meterFunction}/>
    </div>
  )
}

export default meter
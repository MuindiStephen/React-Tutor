import React, { useState } from 'react'

export default function Count() {

const [count, setCount] = useState(0);

// setState updates count to a new value

  return (
    <div>
        <p>You clicked {count} times</p> 
        <button onClick={
            () => setCount(count+1)
        }></button>

        {/* On click the count value gets incremented */}
    </div>
  )
}

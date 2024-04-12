import React,{useState,useMemo} from 'react'

function Count() {
   const [state,setState] = useState(0)
   const [newstate,setnewState] = useState(0)

  useMemo(()=>{
    setnewState(state*state)
    },[state])
   

    console.log(newstate,'newState')
    console.log(state,'State')

  return (
    <div>
      <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />
      <span>{newstate}</span>
    </div>
  )
}

export default Count
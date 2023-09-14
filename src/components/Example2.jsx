import { useEffect } from "react"
import { useState } from "react"

function Example2 (){
const [num, setNum ] = useState(0) 
console.log('example2 arranca', num)
function handleAdd(){
  setNum(num + 1 )
}
function handleSub(){
  setNum(num - 1 )
}
useEffect(()=>{
  const manolo = num 
  console.log ('se ha ejecutado UseEffect')
  setInterval (()=>{
    console.log('interval', manolo)
    setNum((oldNum)=>{
      console.log('increment + 1 ', oldNum )
      return oldNum+1
    })
  }, 10000)
},[])

  return <>
  <h1></h1>
  <p>numero: {num}</p>
  <button onClick={handleAdd}>+</button>
  <button onClick={handleSub}>-</button>
  </>
}
export default Example2
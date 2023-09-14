

function Example (){
const date = Date.now()
const now = new Date(date)
console.log(now)

  return <>
  <h1>Tu reloj de confianza: </h1>
  <br />
  <ol>
    <li>----ToLocaleTimeString:
      <p>{now.toLocaleTimeString()}</p>

    </li>
    <br/>
    <li> ----To time string:
      <p>{now.toTimeString()}</p>
    </li>
       <br/>
    <li>----toDateString: <p>{now.toDateString()}</p></li>
       <br/>
    <li>----toLocaleDateString:<p>{now.toLocaleDateString()}</p></li>
       <br/>
    <li>----toLocaleString:  <p>{now.toLocaleString()}</p></li>
       <br/>
    <li>----toString: <p>{now.toString()}</p></li>
       <br/>
    <li>----toUTCString:  <p>{now.toUTCString()}</p></li>
  </ol>
  
  
  

 

  </>
}
export default Example
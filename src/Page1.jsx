import './Page1.css'
import { Link } from "react-router-dom";

function Page1() {
  return (
    <>
      <p>Page1</p>
      <Link to={`/2`}>Page2</Link>
    </>
  )
}

export default Page1

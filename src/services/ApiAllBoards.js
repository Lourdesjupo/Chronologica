
const allBoards = async ()=>{
  const response = await fetch(
    `${import.meta.env.VITE_CHRONOLOGICA_API}/api/boards`
  )
  const dataJson = await response.json();
  return dataJson
}

export default allBoards
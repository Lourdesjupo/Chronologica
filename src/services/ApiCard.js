const getAllCardsOfBoards = async (id)=>{
  const response = await fetch(
    `${import.meta.env.VITE_CHRONOLOGICA_API}/api/boards/${id}`
  )

  const dataJson = response.json()
  return dataJson
} 

export default getAllCardsOfBoards
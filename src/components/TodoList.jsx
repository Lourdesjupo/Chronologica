import { useEffect, useState } from 'react';
import allBoards from '../services/ApiAllBoards';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import getAllCardsOfBoards from '../services/ApiCard';
import TodoListItems from './TodoListItems';

function TodoList() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard,setSelectedBoard] = useState(undefined)
  console.log('pulso', selectedBoard)

  async function loadBoards() {
    const aB = await allBoards();
    setBoards(aB);
  }


  async function handleClickBoard(id) {
    const allCards = await getAllCardsOfBoards(id)
    setSelectedBoard((actual)=>{console.log(actual);return allCards})
  }

  useEffect(() => {
    loadBoards();
  }, []);

  return (
    <>
      <ButtonGroup variant='contained' size="small" orientation="vertical" aria-label='Basic button group' sx={{m:3}}>
        {boards.map((el) => {
          return <Button key={el.id} onClick={()=>{handleClickBoard(el.id)}}>{el.name}</Button>;
        })}
      </ButtonGroup>
      <br></br>
      {selectedBoard !== undefined && <TodoListItems board = {selectedBoard}/>}
    </>
  );
}

export default TodoList;

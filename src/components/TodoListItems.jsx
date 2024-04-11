
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

function TodoListItems ({board}) {
  const [cards, setCards] =useState([])
 
 useEffect(()=>{  
  setCards(board[0].lists)
 }, [])

  console.log('cards',cards)
  console.log('nombre', board[0][0])

  return (<> 
  {board !== undefined && cards.map((el=>{
    return (
    <> 
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {el.name}
          </Typography>
          <CardContent>
          {el.items.map((el)=>{
            return (<Typography key={el.id} variant="h6" component="div">{el.title} </Typography>)
          })}
       </CardContent>
        </CardContent>
      </Card>
    </>)
  }))}

  {/* <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        <Typography variant="h5" component="div">
          be
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
    </>)
}

export default TodoListItems
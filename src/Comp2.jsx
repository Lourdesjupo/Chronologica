import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Paper, TextField, Typography } from '@mui/material';

function Comp2() {

  const handleClick = (ev) => {
    console.log(ev)
  }

  return (
    <>    
    <Paper variant="outlined" elevation={16}>
      <Stack
        m={3}
        direction="column"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Typography variant="h3" component="p">TrackedTime</Typography>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Duration" variant="outlined" />
        <Button color="secondary" variant="outlined" onClick={handleClick}>Add</Button>
      </Stack>
    </Paper>
    </>
  )
}

export default Comp2

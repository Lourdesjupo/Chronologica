import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { TextField, Typography } from '@mui/material';

function Comp1() {

  const handleClick = (ev) => {
    console.log(ev)
  }

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography variant="h3" component="p">OneTime</Typography>
        <TextField id="outlined-basic" label="Manolete" variant="outlined" />
        <Button color="secondary" variant="outlined" onClick={handleClick}>Add</Button>
      </Stack>
    </>
  )
}

export default Comp1

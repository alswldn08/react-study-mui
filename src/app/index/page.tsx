import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function IndexPage() {
  const [count,setCount] = useState(0);

  function handledButtonClick (){
    setCount(prev=>prev+1);
  }

  return (
    <Stack>
      <Typography>Index Page</Typography>
      <Typography variant='h1'>{count}</Typography>
      <Button onClick={handledButtonClick} variant='contained'>Count</Button>
    </Stack>
  );
}

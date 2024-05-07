import { Stack, Box, TextField, Button } from '@mui/material';
import PostItem from './PostItem';
function Feed() {
  return (
    <Box backgroundColor='#eeeeee'>
      <Stack spacing={1} sx={{ alignItems: 'center' }} p={4}>
        <TextField sx={{ width: '450px' }} size='small' />
        <Button variant='contained' sx={{ width: '450px' }}>
          create post
        </Button>
        <PostItem />
        <PostItem />
        <PostItem />
      </Stack>
    </Box>
  );
}

export default Feed;

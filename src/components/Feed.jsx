import { useContext } from 'react';
import { Stack, Box, TextField, Button } from '@mui/material';
import PostItem from './PostItem';
import { PostContext } from '../context/PostContext';
function Feed() {
  const { posts } = useContext(PostContext);
  return (
    <Box backgroundColor='#eeeeee'>
      <Stack spacing={1} sx={{ alignItems: 'center' }} p={4}>
        <TextField sx={{ width: '450px' }} size='small' />
        <Button variant='contained' sx={{ width: '450px' }}>
          create post
        </Button>
        {posts.slice(0, 50).map((post) => (
          <PostItem key={post.id} title={post.title} body={post.body} />
        ))}
      </Stack>
    </Box>
  );
}

export default Feed;

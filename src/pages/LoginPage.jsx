import { Box, Typography, Button, TextField, Divider } from '@mui/material';
// import Box from '@mui/material/Box'

function LoginPage() {
  return (
    <Box component='main' height='100vh' display='flex' justifyContent='space-between'>
      <Box
        component='section'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        p='20px'
        flex={1}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        <Typography variant='h3' color='#4D8ED3' fontWeight={900}>
          FakeBuck
        </Typography>
        <Typography variant='subtitle1' fontWeight={500}>
          Connect with friend and the world.
        </Typography>
      </Box>
      <Box
        component='section'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        p='20px'
        flex={1}
      >
        <Box
          component='form'
          display='flex'
          flexDirection='column'
          gap='12px'
          padding='16px'
          backgroundColor='white'
          borderRadius={1}
        >
          <TextField type='text' size='small' variant='outlined' label='Email or Phone number' />
          <TextField type='password' size='small' variant='outlined' label='password' />
          <Button type='submit' variant='contained' disableElevation color='primary'>
            Login
          </Button>
          <Button
            type='button'
            variant='text'
            disableElevation
            color='primary'
            sx={{
              fontSize: '12px',
              fontWeight: 500,
            }}
          >
            Forgot password?
          </Button>
          <Divider />
          <Button type='button' variant='contained' disableElevation color='success'>
            Create New Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;

import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from '../components/AppBar';

export default function AppLayout() {
  return (
    <Box flexGrow={1}>
      <AppBar />
      <Outlet />
    </Box>
  );
}

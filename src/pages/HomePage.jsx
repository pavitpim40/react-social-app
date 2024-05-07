import { Box } from '@mui/material';
import AppBar from '../components/AppBar';
function HomePage() {
  return (
    <Box flexGrow={1}>
      <AppBar />

      {/* Left : SideBar */}
      {/* Mid : Feed */}
      {/* Rigth : Friend */}
    </Box>
  );
}

export default HomePage;

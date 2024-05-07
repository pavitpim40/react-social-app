import { Grid } from '@mui/material';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import RightBar from '../components/RightBar';
function HomePage() {
  return (
    <Grid container sx={{ textAlign: 'center', height: 'calc(100vh - 64px)' }}>
      <Grid item md={3} sx={{ backgroundColor: 'wheat', display: { xs: 'none', md: 'block' } }}>
        <SideBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <Feed />
      </Grid>
      <Grid item md={3} sx={{ backgroundColor: 'wheat', display: { xs: 'none', md: 'block' } }}>
        <RightBar />
      </Grid>
    </Grid>
  );
}

export default HomePage;

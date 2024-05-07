import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    let isValid = true;

    if (isValid) navigate('/profile');
    else navigate('/login');
  };
  return (
    <div>
      <h1> HomePage</h1>
      <Link to='/login'>LoginPage</Link>
      <Link to='/profile'>ProfilePage</Link>
      <Button
        variant='contained'
        color='error'
        size='medium'
        onClick={handleClick}
        endIcon={<DeleteIcon />}
      >
        Go to 404
      </Button>
    </div>
  );
}

export default HomePage;

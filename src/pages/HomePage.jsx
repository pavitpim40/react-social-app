import { Link, useNavigate } from 'react-router-dom';

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
      <button onClick={handleClick}>Go to 404</button>
    </div>
  );
}

export default HomePage;

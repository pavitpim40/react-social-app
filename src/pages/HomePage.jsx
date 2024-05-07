import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1> HomePage</h1>
      <Link to='/login'>LoginPage</Link>
      <Link to='/profile'>ProfilePage</Link>
    </div>
  );
}

export default HomePage;

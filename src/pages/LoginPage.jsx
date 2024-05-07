import { Link } from 'react-router-dom';
function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <Link to='/'>HomePage</Link>
      <Link to='/profile'>ProfilePage</Link>
    </div>
  );
}

export default LoginPage;

import { Link } from 'react-router-dom';
function ProfilePage() {
  return (
    <div>
      <h1>ProfilePage</h1>
      <Link to='/login'>Login Page</Link>
      <Link to='/'>Home Page</Link>
    </div>
  );
}

export default ProfilePage;

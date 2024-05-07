import { Link } from 'react-router-dom';
function NotFoundPage() {
  return (
    <div>
      <h1>NotFoundPage</h1>
      <Link to='/'>Back to HomePage</Link>
    </div>
  );
}

export default NotFoundPage;

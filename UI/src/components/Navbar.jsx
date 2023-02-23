import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const NavBar = () => {
  const { logout } = useLogout();

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout App</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

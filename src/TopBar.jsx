import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TopBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate("/LoginPage"); // Redirect to login after logout
  };

  return (
    <div className="top-bar">
      <div className="logo">
        <span>OLP</span>
      </div>

      <div className="search-bar">
          <button>Happy Learning!</button>
        </div> 

      <div className="nav-links">
        <Link to="/categories">Categories</Link>
      </div>

      <div className="profile-section">
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/LoginPage")}>Login</button>
            <button onClick={() => navigate("/SignUp")}>Sign Up</button>
            <Link to="/"></Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;

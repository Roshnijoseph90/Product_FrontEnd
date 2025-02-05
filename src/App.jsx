import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Login from './Components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <nav className='navbar navbar-expand-lg'  style={{ backgroundColor: 'green' }}>
        <div className='container-fluid'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link text-white' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white ' to="/Products">Products</Link>
            </li>
            <li>
              {!isAuthenticated ? (
                <Link className='nav-link text-white' to="/login">Login</Link>
              ) : (
                <button onClick={handleLogout} className='nav-link'>Logout</button>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        {/* Protected Route */}
        <Route
          path='/products'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Products />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

// Protected Route component
function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/products" />;
}


export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Login from './Components/Login';
import Signup from './Components/Signup';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');  // Redirect to login page after logout
  };
  

  return (
    <Router>
      <nav className='navbar  navbar-expand-lg'  >
        <div className='container-fluid'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link text-white' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white ' to="/login">Products</Link>
            </li>

            </ul>
            <ul className='navbar-nav ms-auto'> 
              
              <li>
              {!isAuthenticated ? (
                <Link className='nav-link text-white' to="/login">Login</Link>
              ) : (
                <button onClick={handleLogout} className='nav-link'>Logout</button>
              )}
            </li>
            <li className='nav-item'>
              <Link className='nav-link   text-white ' to="/signup">Sign UP</Link>
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
          <Route path ='/signup' element ={<Signup/>} />
        {/* If the user is not logged in, redirect to login */}
        <Route 
          path="/products" 
          element={isAuthenticated ? <Products /> : <Navigate to="/login" />}
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

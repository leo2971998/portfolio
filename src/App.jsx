import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/blog">Blog</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/admin">Admin</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;

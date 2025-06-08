import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/blog">Blog</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/admin">Admin</Link>
      </nav>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Post from './pages/Post.jsx';
import Projects from './pages/Projects.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Admin from './pages/Admin.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <Post /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <Project /> },
      { path: 'contact', element: <Contact /> },
      { path: 'admin', element: <Admin /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

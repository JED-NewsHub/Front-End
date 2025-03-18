import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './home';
import News from './components/pages/News';
import SingleNews from './components/pages/SingleNews';
import Blog from './components/pages/Blog';
import SingleBlog from './components/pages/SingleBlog';
import Login from './components/form/Login';
import SignUp from './components/form/SignUp';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />
    },

    {
      path: "/news",
      element:<News />
    },

    {
      path: "/news/:id",
      element:<SingleNews />
    },

    {
      path: "/blog",
      element:<Blog />
    },

    {
      path: "/blog/:id",
      element:<SingleBlog />
    },
    {
      path: "/login",
      element:<Login />
    },

    {
      path: "/signup",
      element:<SignUp />
    },
   
    {
      path: "/about",
      element:<About />
    },

    {
      path: "/contact",
      element:<Contact />
    },
  
  ]);
 

  return <RouterProvider router={router} />
}

export default App

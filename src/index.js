import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Home';
import About from "./About";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/maps/laguna",
    element: <App map="laguna" />,
  },
  {
    path: "maps/cavite",
    element: <App map="cavite" />,
  },
  {
    path: "maps/metro_manila",
    element: <App map="metro_manila" />,
  },
  {
    path: "maps/bulacan",
    element: <App map="bulacan" />,
  },
  {
    path: "maps/rizal",
    element: <App map="rizal" />,
  },
  {
    path: "maps/cebu",
    element: <App map="cebu" />,
  },
  {
    path: "maps/etivac",
    element: <App map="etivac" />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { route } from "./route.jsx";
import { RouterProvider } from "react-router";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

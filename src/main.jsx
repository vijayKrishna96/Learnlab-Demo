import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Login from './Login';
import Admin from './admin'
import Home from './Components/Home/Home';
import CourseForm from './Components/AddCourse/CourseForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: '/admin',
        element: <Admin/>
      },
      {
        path: '/addcourse',
        element: <CourseForm/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

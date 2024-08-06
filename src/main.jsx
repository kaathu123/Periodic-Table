import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Periodic from './Periodictable/Periodic'
import Periodictable from './Periodictable/Periodictable'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Grid from './Grid'
import MultiGrid from './MultiGrid'
import Complexgrid from './Complexgrid'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/periodic',
    element:<Periodic/>
  },
  {
    path:'/periodictable',
    element:<Periodictable/>
  },
  {
    path:'/grid',
    element:<Grid/>
  },
  {
   path:'/multigrid',
   element:<MultiGrid/>
  },
  {
    path:'/complex',
    element:<Complexgrid/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

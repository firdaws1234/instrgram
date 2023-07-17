
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import Home from "./pages/Home1/home"
import Main from './pages/main/Main'
import Profil from './pages/profil/Profil'
import Edit from './pages/Edit/Edite'

const wifi =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Main/>
      },
      {
         path:"main",
        element:<Home/>
      },
      {
         path:"profil",
        element:<Profil/>
      },
      {
         path:"edit",
        element:<Edit/>
      }
     
    ]
    
  
  }
])

function App() {

  return (
    <>
     <RouterProvider router={wifi}/>
   </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './Layouts/LayoutOne'
import Home from './Pages/Home'
import Login from './Component/Login'

function App() {
  const myroute = createBrowserRouter(createRoutesFromElements(
  <Route>  
      <Route path='/' element= {<LayoutOne/>}>
          <Route index element={<Home/>}/>
      </Route>
  </Route>
  )
)
  

  return (
    <>
      <RouterProvider router={myroute}/>

    </>
  )

}
export default App
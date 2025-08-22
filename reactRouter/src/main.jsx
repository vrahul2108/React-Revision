import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { gitInfoLoader } from './components/Github/Github'
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element: <Home/>
//       },
//       {
//         path : "about",
//         element: <About/>
//       },
//       {
//         path : "contact",
//         element: <Contact/>
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element ={<Home/>}></Route>
      <Route path='about' element ={<About/>}></Route>
      <Route path='contact' element ={<Contact/>}></Route>
      <Route path='user/:userid' element ={<User/>}></Route>
      <Route 
        loader = {gitInfoLoader}
        path='github' 
        element ={<Github/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ContactUs from './components/Contact us/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element:<App/>,
//       children: [
//         {
//           path:'/',
//           element: <Home/>
//         },
//         {
//           path:'/About',
//           element: <About/>
//         },
//         {
//           path: 'ContactUs',
//           element:<ContactUs/>
//         }
//       ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
         <Route path='' element ={<Home/>} />
         <Route path='About' element ={<About/>} />
         <Route path='Contactus' element ={<ContactUs/>} />
         <Route path='User/:userid' element ={<User/>} />
         <Route loader={gitInfoLoader}
         path='Github' element ={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

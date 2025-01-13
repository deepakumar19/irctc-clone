
import './App.css'
import Home from "./pages/Home/Home"
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Register from './pages/Register/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([{
    index: true, element: <Home />
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: '*', element: <NotFound /> }


  ]);
  return (
    <RouterProvider router={router} />
    // <Home/>
    //  <Register/>
    // <Login/>
  )
}

export default App

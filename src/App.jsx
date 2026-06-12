import { RouterProvider } from 'react-router'
import './App.css'
import router from "./router/Router"
//import Login from './auth/login'
//import Signup from './auth/signup'
function App()
{
  return (
    <RouterProvider router={router}/>
  )
}

export default App
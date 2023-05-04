import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Shop from './Components/Shop/Shop'
import Home from './Components/Layout/Home'
import Order from './Components/Order/Order'
import Inventory from './Components/Inventory/Inventory'
import Login from './Components/Login/Login'
import cartProductsLoader from './Components/Loader/CartsProduct'
import Checkout from './Components/Checkout/Checkout'
import SignUp from './Components/SignUp/SignUp'
import AuthProvider from './Components/Provider/AuthProvider'
import PrivateRoute from './Components/Routes/PrivateRoute'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <PrivateRoute> <Inventory></Inventory>  </PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'checkout',
        element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)

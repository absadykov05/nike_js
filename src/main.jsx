import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Sneaker from './Components/Sneaker/Sneaker.jsx'
import Bag from './Components/Bag/Bag.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/sneaker',
        element: <Sneaker/>
      }, 
      {
        path: '/bag',
        element: <Bag/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)

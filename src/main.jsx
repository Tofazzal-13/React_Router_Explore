import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Components/Users/Users.jsx'
import Users2 from './Components/Users2/Users2.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())


const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children: [
      {index:true, Component:Home },
      {path:"mobiles", Component:Mobiles },
      {path:"laptops", Component:Laptops },
      {
        path:"users", 
        loader: ()  => fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:"Users2",
        element: 
        <Suspense fallback={<span>Loading....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path:"Users2/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },

      {
        path:"Posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component:Posts
      },
      {
        path:"Posts/:postId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetails
      }
    ]
  },
  {
    path:"/about",
    element: <div>Let me know about you</div>  
  },
  {
    path: "/blog",
    element: <div>about blog are here</div>
  },
  {
    path: "/app",
    Component: App 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} > </RouterProvider>
  </StrictMode>,
)

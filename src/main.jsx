import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home} from './pages/home/Home.jsx'
import {Login} from './pages/login/Login.jsx'
import {Post} from './pages/post/Post.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/post",
        element: <Post />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)

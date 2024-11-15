import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Login} from './pages/login/Login.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Layout } from './components/Layout.jsx';
import { routes } from './routes/index.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        element: <Layout />,
        children: routes,
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)

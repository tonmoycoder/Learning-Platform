import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import LogIn from "../Components/Pages/LogIn/LogIn";
import Register from "../Components/Pages/Register/Register";
import Main from "../Layouts/Main";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import CheckOut from "../Components/Pages/CheckOut/CheckOut";
import FAQPage from "../Components/Pages/FAQ/FAQPage";
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
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/faq',
                element: <FAQPage></FAQPage>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])
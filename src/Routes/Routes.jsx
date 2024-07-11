import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SingIn/SignIn";
import SingUp from "../Pages/SigngUp/SingUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'signin',
                element: <SignIn></SignIn>
            },
            {
                path: 'signup',
                element: <SingUp></SingUp>
            }
        ]
    }
])
export default router
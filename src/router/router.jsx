import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import News from "../Pages/News/News";
import Destination from "../Pages/Destination/Destination";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Booking from "../Pages/Booking/Booking";
import Login from "../Login/Login";
import Register from "../Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <News></News>
            },
            {
                path: "/destination",
                element: <Destination></Destination>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/:link",
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ()=> fetch(`/data.json`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;
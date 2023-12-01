import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
// import Navbar from "../Header/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div><Toaster/></div>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;
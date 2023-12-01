import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar2 = () => {
    const {user} = useContext(AuthContext)
    const links = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            News
        </NavLink>
        <NavLink
            to="/destination"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Destination
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Blog
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Contact
        </NavLink>

    </>
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-[120px] h-[48px]" src="/images/logo2.png" alt="" /></a>
                </div>
                <div className="">  
                    <div className="ml-20">
                        <ul className="space-x-12 font-bold  ml-[550px] menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                {
                        user ? user.email || user.displayName : <Link to="/login"><button className="btn bg-[#F9A51A]">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
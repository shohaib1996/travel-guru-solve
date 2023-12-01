import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out successfully')
            })
            .catch(error => {
                console.error(error);
            })
    }
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
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-[120px] h-[48px]" src="/images/logo.png" alt="" /></a>
                </div>
                <div className="navbar-center gap-2">
                    <div className="form-control mr-12">
                        <input type="text" placeholder="Search" className="input bg-transparent border-2 border-white input-bordered w-24 md:w-auto" />
                    </div>
                    <div>
                        <ul className="space-x-12 font-bold menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <p> {user.email || user.displayName}</p>
                            <div className="dropdown dropdown-end">



                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">

                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between text-black">
                                            {user.displayName || "Anonymous"}

                                        </a>
                                    </li>
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul>
                            </div>
                        </> : <Link to="/login"><button className="btn bg-[#F9A51A]">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
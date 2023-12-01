import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "../Header/Navbar2";
import { FaFacebook } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";



const Register = () => {
    const { createUser, logOut } = useContext(AuthContext)
    // console.log(createUser);
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const firstName = form.get("firstName")
        const lastName = form.get("lastName")
        const name = firstName + " " + lastName
        const email = form.get("email")
        const password = form.get("password")
        const confirmPassword = form.get("confirmPassword")
        const photo = form.get("photo")
        const isChecked = form.get("terms")
        console.log(firstName, email,name, lastName, password, confirmPassword, photo, isChecked);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                e.target.reset()
                toast.success("User Created SuccessFully")
                toast.success("Please Login Now For Better Experience")

                updateProfile(user, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    toast.success('User Profile Updated');

                    logOut()
                        .then(() => {
                            console.log('Log Out successfully')
                            navigate("/login")
                        })
                        .catch(error => {
                            console.error(error);
                        })

                }).catch(error => {
                    console.error(error);
                })
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="mb-12">
            <Navbar2></Navbar2>
            <div className="max-w-2xl mx-auto border-2 border-[#ABABAB] mt-5">
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-10">Register</h1>
                    <form onSubmit={handleRegister}>
                        <input type="text" name="firstName" placeholder="First Name" className="border-b-2 w-full p-3 text-black font-bold mb-8" />
                        <input type="text" name="lastName" placeholder="Last Name" className="border-b-2 w-full p-3 text-black font-bold mb-8" />
                        <input type="email" name="email" placeholder="Enter Email" className="border-b-2 w-full p-3 text-black font-bold mb-8" />
                        <input type="password" name="password" placeholder="Password" className="border-b-2 w-full p-3 text-black font-bold mb-8" />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="border-b-2 w-full p-3 text-black font-bold mb-8" />
                        <input type="text" name="photo" placeholder="Photo" className="border-b-2 w-full p-3 text-black font-bold mb-8" />
                        <div className="flex">
                            <input type="checkbox" name="terms" className="border-b-2 mr-5 mb-5 p-3 text-black font-bold" />
                            <label className="text-black font-bold mb-5">I accept the <span className="text-[#F9A51A] underline">Terms and Conditions</span></label>
                        </div>
                        <div>
                            <button type="submit" className="w-full btn bg-[#F9A51A] font-bold text-black">Create an account</button>
                        </div>
                    </form>


                    <p className="font-bold text-center mt-4">Already have an account? <Link to="/login"><span className="text-[#F9A51A]">Login</span></Link></p>
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="py-3 flex items-center text-base font-bold  uppercase before:flex-[1_1_0%] before:border-t before:border-gray-400 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-400 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600 text-black ">
                    Or
                </div>
                <div className="space-y-5">
                    <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                            <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                            <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                            <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                            <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                        </svg>
                        Sign up with Google
                    </button>
                    <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <FaFacebook className="text-xl text-blue-700"></FaFacebook>
                        Sign up with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Register;
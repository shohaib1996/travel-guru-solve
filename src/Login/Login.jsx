import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar2 from "../Header/Navbar2";
import { FaFacebook } from 'react-icons/fa';
import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";



const Login = () => {
   
    const { signInUser, signInWithGoogle ,signInWithFacebook } = useContext(AuthContext)
    // const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef(null)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        // const isChecked = form.get("terms")
        console.log(email, password);


        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate(location?.state ? location.state : "/")
                toast.success("Login Successfully")

            })
            .catch(error => {
                console.log(error);
                toast.error("Please sign in with valid email and password or register")
            })
    }
    const handleForgetPassword = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = emailRef.current.value;
        if (!email) {
            toast.error('please Enter a email Address')
        } else if (!email.test(emailRegex)) {
            toast.error("please Enter a valid Email!!")
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Check You Email Address")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }
    
    const handleSocial = (media) => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success("Login Successfully")
                navigate("/")


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
                    <h1 className="text-2xl font-bold mb-10">Login</h1>
                    <form onSubmit={handleLogin}>
                        <input type="email" name="email" placeholder="Enter Email" className="border-b-2 w-full p-3 text-black font-bold mb-8" />
                        <input type="password" name="password" placeholder="Password" className="border-b-2 w-full p-3 text-black font-bold mb-8" />
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex">
                                <input type="checkbox" name="terms" className="border-b-2 mr-5 p-3 text-black font-bold" />
                                <label className="text-black font-bold">Remember Me</label>
                            </div>
                            <button onClick={handleForgetPassword} className="text-[#F9A51A] font-bold">Forgot Password</button>
                        </div>
                        <div>
                            <button className="w-full btn bg-[#F9A51A] font-bold text-black">Login</button>
                        </div>
                    </form>
                    <p className="font-bold text-center mt-4">Don’t have an account? <Link to="/register"><span className="text-[#F9A51A]">Create an account</span></Link></p>
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="py-3 flex items-center text-base font-bold  uppercase before:flex-[1_1_0%] before:border-t before:border-gray-400 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-400 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600 text-black ">
                    Or
                </div>
                <div className="space-y-5">
                    <button onClick={()=> handleSocial(signInWithGoogle)} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                            <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                            <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                            <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                            <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                        </svg>
                        Sign up with Google
                    </button>
                    <button onClick={()=> handleSocial(signInWithFacebook)} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <FaFacebook className="text-xl text-blue-700"></FaFacebook>
                        Sign up with Facebook
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;
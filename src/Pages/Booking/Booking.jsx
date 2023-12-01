import { useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../../Header/Navbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";



const Booking = () => {
    const data = useLoaderData()
    const location = useLocation()
    const [startDate, setStartDate] = useState(new Date());
    const [startDateTo, setStartDateTO] = useState(new Date());


    // console.log(data);
    // console.log(location);
    const bookingCard = data.find(card => card.link === location.pathname)
    const { title, imageSrc } = bookingCard;
    const bgImage = {
        backgroundImage: `url(${imageSrc})`,
    };

    console.log(bookingCard);

    return (
        <div style={bgImage} className="h-screen bg-no-repeat bg-cover bg-center">
            <div className='bg-black bg-opacity-70 h-[100vh]'>
                <div className='text-white'>
                    <Navbar></Navbar>
                </div>
                <div className="max-w-screen-xl mx-auto flex items-center justify-center mt-20 gap-8">
                    <div className="flex-1 ml-8 ">
                        <h1 className="text-8xl font-bold text-white">{title}</h1>
                        <p className="text-white mt-8">Sreemongol is a picturesque town located in the northeastern part of Bangladesh. Often referred to as the Land of Two Leaves and a Bud,Sreemongol is famous for its lush tea gardens that stretch as far as the eye can see. It&apos;s a paradise for tea lovers and nature enthusiasts. The town boasts a tranquil ambiance, with rolling hills covered in verdant tea plantations and dense forests.</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-[450px] p-4 space-y-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <p className="text-[#818181]">Origin</p>
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id='location-search"'
                                    className="block p-2.5 w-full z-20  text-gray-900 bg-gray-50 rounded-lg  border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 font-bold dark:text-white dark:focus:border-blue-500"
                                    placeholder="Search for city"
                                    required=""
                                />

                            </div>
                            <p className="text-[#818181]">Destination</p>
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id='location-search"'
                                    className="block p-2.5 w-full z-20  text-gray-900 bg-gray-50 rounded-lg  border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 font-bold dark:text-white dark:focus:border-blue-500"
                                    placeholder="Search for city"
                                    required=""
                                    value={title}
                                />

                            </div>
                            <div className="flex items-center">
                                <div className="flex-1">
                                    <h1 className="text-[#818181]">From</h1>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                                </div>
                                <div className="flex-1">
                                    <h1 className="text-[#818181]">To</h1>
                                    <DatePicker selected={startDateTo} onChange={(date) => setStartDateTO(date)} />
                                </div>
                            </div>
                            <button className="btn bg-[#F9A51A] w-full">Start Booking</button>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;
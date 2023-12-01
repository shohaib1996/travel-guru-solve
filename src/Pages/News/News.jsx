import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../../Header/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';


const News = () => {
    const carouselData = [
        {
            id: "slide1",
            title: "Sajek",
            imageSrc: "/images/Sajek.png",
            link: "/booking1",
        },
        {
            id: "slide2",
            title: "Sreemongol",
            imageSrc: "/images/Sreemongol.png",
            link: "/booking2",
        },
        {
            id: "slide3",
            title: "Sundorbon",
            imageSrc: "/images/sundorbon.png",
            link: "/booking3",
        },
    ];

    const [curr, setCurr] = useState("slide1");

    const prevSlide = () => {
        // Update curr to the previous slide (if possible)
        if (curr === "slide1") {
            setCurr("slide3");
        } else if (curr === "slide2") {
            setCurr("slide1");
        } else if (curr === "slide3") {
            setCurr("slide2");
        }
    }

    const nextSlide = () => {
        // Update curr to the next slide (if possible)
        if (curr === "slide1") {
            setCurr("slide2");
        } else if (curr === "slide2") {
            setCurr("slide3");
        } else if (curr === "slide3") {
            setCurr("slide1");
        }
    }




    return (

        <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover bg-center bg-fixed">
            <div className='bg-black bg-opacity-70 h-[100vh]'>
                <div className='text-white'>
                    <Navbar></Navbar>
                </div>
                <div className="max-w-screen-xl mx-auto ">
                    <div className='flex items-center justify-center gap-5 mt-8'>
                        <div className='flex-1 space-y-6 ml-5 '>
                            <h1 className='text-8xl font-bold text-white'>Cox&apos;s bazar</h1>
                            <p className='text-white'>Cox&apos;s Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                            <div className="navbar-end">
                                <button className="btn bg-[#F9A51A]">Booking <FaArrowRight></FaArrowRight></button>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className="carousel carousel-end max-w-[600px] p-4 space-x-4 rounded-box">
                                {carouselData.map((item) => (
                                    <div key={item.id} id={item.id} className="carousel-item">
                                        <Link to={item.link}>
                                            <div className={`${curr === item.id ? 'relative border-2 border-yellow-500 rounded-2xl' : 'relative'}`}>
                                                <div className='relative'>
                                                    <img src={item.imageSrc} className="rounded-box w-[230px] h-[400px]" />
                                                    <p className='absolute text-center bottom-10 top-0 opacity-50 h-full bg-black w-full rounded-xl'></p>
                                                </div>
                                                <p className='font-bold text-2xl text-white text-center absolute bottom-10 left-16'>{item.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <a onClick={prevSlide} href={`#${curr}`} className="btn btn-circle mr-7">❮</a>
                                <a onClick={nextSlide} href={`#${curr}`} className="btn btn-circle">❯</a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default News;
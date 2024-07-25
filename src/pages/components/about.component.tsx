import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import modelCar from '../../assets/images/about.jpg'
import { NavLink } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa6'

const AboutSection: React.FC = () => {
    return (
        <>
            <div className="container mx-auto mt-40 w-3/4">
                <div className="grid grid-cols-2 gap-6">
                    <div className={``}>
                        <div className={`flex flex-col space-y-5`}>
                            <h3 className={`text-sm text-customOrange`}>
                                Sherpa Vehicle
                            </h3>
                            <h1 className="text-5xl font-semibold">
                                We Are More Than
                            </h1>
                            <h3 className="text-3xl font-medium text-customOrange">
                                Just A Car Rental Company
                            </h3>
                            <p className="leading-10">
                                At Car Rentals, we provide a seamless car rental
                                experience tailored to your needs. Whether
                                you're planning a weekend getaway, a business
                                trip, or simply need a reliable vehicle for
                                daily...
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col space-y-10">
                            <div className="flex">
                                <IoMdCheckmarkCircleOutline className="mr-3 mt-1 text-xl" />
                                <span>We Provide SUV and Luxury Cars</span>
                            </div>
                            <div className="flex">
                                <IoMdCheckmarkCircleOutline className="mr-3 mt-1 text-xl" />
                                <span>Economy Cars</span>
                            </div>
                        </div>
                        <button className="mt-10 flex items-center space-x-2 rounded-full bg-customOrange px-10 py-5 font-bold text-white hover:border-2 hover:border-gray-950 hover:bg-white hover:text-gray-900">
                            <span>Read More</span>
                            <FaArrowRight />
                        </button>
                    </div>
                    <div className={`mt-20`}>
                        <div className={`relative mb-4 overflow-hidden`}>
                            <img
                                src={modelCar}
                                alt=""
                                className={`rounded-3xl brightness-75 filter transition-transform hover:scale-105`}
                            />

                            <div
                                className={`absolute bottom-0 left-0 h-[100px] w-[100px] rounded-tr-[45px] bg-white text-center leading-[100px]`}
                            >
                                <NavLink
                                    to={'#'}
                                    className={`absolute bottom-4 left-4 right-4 top-4 rounded-full text-center text-white`}
                                >
                                    <div
                                        className={`h-[70px] w-[70px] rounded-full border border-customOrange bg-customOrange text-sm leading-loose text-black`}
                                    >
                                        <FaPlay
                                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white`}
                                        />
                                    </div>
                                </NavLink>
                                <div
                                    className={`shape-top-left absolute -left-[1px] -top-6 -rotate-90`}
                                >
                                    <svg
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6`}
                                    >
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#ffffff"
                                        ></path>
                                    </svg>
                                </div>
                                <div
                                    className={`shape-bottom-right absolute -bottom-[1px] -right-6 -rotate-90`}
                                >
                                    <svg
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6`}
                                    >
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#ffffff"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection

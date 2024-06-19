import React from 'react'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import modelCar from '../../assets/images/modelCar.jpg'

const AboutSection: React.FC = () => {
    return (
        <>
            <div className="container mx-auto mt-40 w-3/4">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-3xl font-semibold">
                            We Are More Than
                        </h3>
                        <h3 className="text-2xl font-medium text-customOrange">
                            Just A Car Rental Company
                        </h3>
                        <p className="leading-loose">
                            At Car Rentals, we provide a seamless car rental
                            experience tailored to your needs. Whether you're
                            planning a weekend getaway, a business trip, or
                            simply need a reliable vehicle for daily...
                        </p>
                        <div className="mt-10 flex flex-col">
                            <div className="flex">
                                <IoMdCheckmarkCircleOutline className="mr-3 mt-1 text-xl" />
                                <span>We Provide SUV and Luxury Cars</span>
                            </div>
                            <div className="flex">
                                <IoMdCheckmarkCircleOutline className="mr-3 mt-1 text-xl" />
                                <span>Economy Cars</span>
                            </div>
                        </div>
                        <button className="mt-4 flex items-center space-x-2 rounded-full bg-customOrange px-10 py-5 font-bold text-white hover:border-2 hover:border-gray-950 hover:bg-white hover:text-gray-900">
                            <span>Read More</span>
                            <FaArrowRight />
                        </button>
                    </div>
                    <div>
                        <div
                            className="relative h-96 w-96 hover:scale-110"
                            style={{ backgroundImage: `url(${modelCar})` }}
                        >
                            <div
                                className={`absolute bottom-14 rotate-[270deg] leading-none`}
                            >
                                <svg
                                    viewBox="0 0 11 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-11 w-11"
                                >
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#ffffff"
                                    ></path>
                                </svg>
                            </div>
                            <div
                                className={`absolute -bottom-1 left-16 rotate-[270deg]`}
                            >
                                <svg
                                    viewBox="0 0 11 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-11 w-11"
                                >
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#ffffff"
                                    ></path>
                                </svg>
                            </div>
                            {/* Redo this section for better looks */}
                            <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-full bg-white">
                                <div className="absolute bottom-2 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-customOrange">
                                    <FaPlay className="text-white" />
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

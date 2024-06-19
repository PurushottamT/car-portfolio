import React from 'react'
import mp4Video from '../../assets/video/video.mp4'
import webmVideo from '../../assets/video/video.webm'
import { Link } from 'react-router-dom'
import TextBox from '../../components/cards.components'

const HomeBanner: React.FC = () => {
    return (
        <>
            <div className="flex h-[90svh] items-center justify-center bg-gray-950 text-center opacity-85">
                <video
                    className="absolute left-0 top-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src={mp4Video} type="video/mp4" />
                    <source src={webmVideo} type="video/webm" />
                </video>
                <div className="relative z-10 rounded-md bg-opacity-50 p-6">
                    <h1 className="mb-12 text-7xl font-bold text-white">
                        Rent A Car
                    </h1>
                    <div className="flex justify-center space-x-4">
                        <Link
                            to="/explore"
                            className="rounded-full bg-customOrange px-12 py-6 text-white hover:bg-white hover:text-gray-900"
                        >
                            View Detail
                        </Link>
                        <Link
                            to="/rent"
                            className="rounded-full bg-white px-12 py-6 text-customOrange hover:bg-customOrange hover:text-white"
                        >
                            Rent Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto -mt-20 flex w-3/4 gap-2">
                <TextBox
                    title="Choose A Car"
                    text="View our range of cars, find your perfect car for the coming days."
                    rank={1}
                />
                <TextBox
                    title="Choose A Car"
                    text="View our range of cars, find your perfect car for the coming days."
                    rank={2}
                />
                <TextBox
                    title="Choose A Car"
                    text="View our range of cars, find your perfect car for the coming days."
                    rank={3}
                />
            </div>
        </>
    )
}

export default HomeBanner

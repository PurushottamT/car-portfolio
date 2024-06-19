import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { GiCarDoor, GiPaperBagOpen } from 'react-icons/gi'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import { TbCircuitBattery } from 'react-icons/tb'

interface ImageSliderProps {
    name: string[]
    image: string[]
    seats: number[]
    transmission: string[]
    bags: number[]
    age: number[]
    price: number[]
}
const ImageSlider = ({ sliderProps }: { sliderProps: ImageSliderProps[] }) => {
    const [imageIndex, setImageIndex] = useState(0)
    return (
        <>
            <div
                className={`relative flex flex-col items-center justify-center overflow-x-hidden bg-blend-darken`}
            >
                <img
                    src={sliderProps[imageIndex].image[0]} // Assuming each sliderProps item has an array of images and we want the first one
                    alt={sliderProps[imageIndex].name[0]} // Assuming name is also an array and we want the first name
                    className={`w-1/2 rounded-lg`}
                />
                <div
                    className={`text-md absolute left-1/2 top-[90%] flex w-[45%] -translate-x-1/2 transform items-center justify-between space-x-5 rounded-lg bg-gray-100 p-3 text-black`}
                >
                    <div className={`flex flex-col`}>
                        <p className={`text-2xl font-bold`}>
                            {sliderProps[imageIndex].name}
                        </p>
                        <div
                            className={`flex items-center justify-center space-x-10`}
                        >
                            <div className={`flex items-center justify-center`}>
                                <GiCarDoor
                                    className={`text-md text-customOrange`}
                                />
                                <p>{sliderProps[imageIndex].seats}</p>
                            </div>
                            <div className={`flex items-center justify-center`}>
                                <FaUser
                                    className={`text-md text-customOrange`}
                                />
                                <p>{sliderProps[imageIndex].age}</p>
                            </div>
                            <div className={`flex items-center justify-center`}>
                                <GiPaperBagOpen
                                    className={`text-md text-customOrange`}
                                />
                                <p>{sliderProps[imageIndex].bags}</p>
                            </div>
                            <div className={`flex items-center justify-center`}>
                                <TbCircuitBattery
                                    className={`text-md text-customOrange`}
                                />
                                <p>{sliderProps[imageIndex].transmission}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`flex items-center`}>
                        <button
                            className={
                                'mr-3 rounded-full bg-customOrange px-6 py-3'
                            }
                        >
                            Detail
                        </button>
                        <p className={`text-xl font-bold text-customOrange`}>
                            ${sliderProps[imageIndex].price}
                        </p>
                        <p>/day</p>
                    </div>
                </div>
                <img
                    src={sliderProps[imageIndex + 1]?.image[0]}
                    alt={sliderProps[imageIndex + 1]?.name[0]}
                    className={`img-right absolute left-[80%] w-1/2 rounded-lg`}
                />
                <img
                    src={
                        sliderProps[
                            imageIndex > 0
                                ? imageIndex - 1
                                : sliderProps.length - 1
                        ].image[0]
                    }
                    alt={
                        sliderProps[
                            imageIndex > 0
                                ? imageIndex - 1
                                : sliderProps.length - 1
                        ].name[0]
                    }
                    className={`img-left absolute right-[80%] w-1/2 rounded-lg`}
                />
                <IoIosArrowDropright
                    className={`absolute right-1/4 text-6xl text-customOrange`}
                    onClick={() =>
                        setImageIndex((imageIndex + 1) % sliderProps.length)
                    }
                />
                <IoIosArrowDropleft
                    className={`absolute left-1/4 text-6xl text-customOrange`}
                    onClick={() =>
                        setImageIndex(
                            (imageIndex - 1 + sliderProps.length) %
                                sliderProps.length
                        )
                    }
                />
            </div>
        </>
    )
}

export default ImageSlider

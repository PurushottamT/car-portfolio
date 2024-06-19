import { FaQuoteLeft, FaStar } from 'react-icons/fa6'

interface testimonialType {
    clientReview: string
    clientName: string
    image: string
}

const Testimonials: React.FC<testimonialType> = ({
    clientName,
    clientReview,
    image,
}) => {
    return (
        <>
            <div className="relative mx-auto mb-4 mt-10 flex max-w-[22rem] flex-col overflow-hidden rounded-xl bg-gray-200 px-8 pt-14 shadow-md">
                <div
                    className={`rating absolute right-0 top-0 rounded-bl-[20px] bg-white px-2 py-4`}
                >
                    <span className={`flex text-customOrange`}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                    <div
                        className={`shape-top-left absolute -left-5 -top-[2px] rotate-90`}
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
                        className={`shape-bottom-right absolute -bottom-6 -right-[2px] rotate-90`}
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
                <FaQuoteLeft
                    className={`mb-2 text-3xl font-bold text-customOrange`}
                />
                <p className={`p-2 text-base text-gray-700`}>{clientReview}</p>
                <div className={`img -ml-10 mt-7 flex items-center space-x-6`}>
                    <div className={`relative rounded-tr-[40px] bg-white p-4`}>
                        <div
                            className={`h-14 w-14 overflow-hidden rounded-full`}
                        >
                            <img
                                src={image}
                                alt=""
                                className={`object-cover`}
                            />
                        </div>
                        <div
                            className={`shape-top-left absolute -top-6 left-2 -rotate-90`}
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
                            className={`shape-bottom-right absolute -bottom-1 -right-6 -rotate-90`}
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
                    <div>{clientName}</div>
                </div>
            </div>
        </>
    )
}

export default Testimonials

import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp, IoMailOpenOutline } from 'react-icons/io5'
import { PiPhoneCall } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className={`mt-20 bg-gray-800 p-12`}>
                <div className={`container mx-auto mt-20 w-3/4`}>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="flex space-x-4">
                            <div className={`rounded-full bg-customOrange p-2`}>
                                <PiPhoneCall
                                    className={`text-5xl text-gray-700`}
                                />
                            </div>
                            <div className={`flex flex-col text-white`}>
                                <h1 className={`text-2xl`}>Call Us</h1>
                                <h3 className={`text-sm`}>+977-9840341825</h3>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className={`rounded-full bg-customOrange p-2`}>
                                <IoMailOpenOutline
                                    className={`text-5xl text-gray-700`}
                                />
                            </div>
                            <div className={`flex flex-col text-white`}>
                                <h1 className={`text-2xl`}>Mail Us</h1>
                                <h3 className={`text-sm`}>
                                    tiwaripurushottam48@gmail.com
                                </h3>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className={`rounded-full bg-customOrange p-2`}>
                                <IoLocationSharp
                                    className={`text-5xl text-gray-700`}
                                />
                            </div>
                            <div className={`flex flex-col text-white`}>
                                <h1 className={`text-2xl`}>Address</h1>
                                <h3 className={`text-sm`}>
                                    Boudha, Kathmandu, Nepal
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-10 grid grid-cols-3 gap-10  mb-10`}>
                        <div className={`flex flex-col space-y-3`}>
                            <h1 className={`text-2xl text-white`}>
                                <span className={`text-customOrange`}>
                                    Sherpa
                                </span>
                                Vehicle Services
                            </h1>
                            <p className={`text-justify text-sm text-white`}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sit, cumque. Maiores assumenda
                                sapiente, voluptatum non cum enim nobis, culpa
                                ipsam obcaecati voluptas ad esse repellendus
                                quibusdam saepe. Assumenda, in impedit?
                            </p>
                            <div className={`flex space-x-5`}>
                                <div
                                    className={`text-md rounded-full border border-customOrange bg-transparent p-3 text-white`}
                                >
                                    <FaFacebookF />
                                </div>
                                <div
                                    className={`text-md rounded-full border border-customOrange bg-transparent p-3 text-white`}
                                >
                                    <FaXTwitter />
                                </div>
                                <div
                                    className={`text-md rounded-full border border-customOrange bg-transparent p-3 text-white`}
                                >
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col space-y-3`}>
                            <h1 className={`text-2xl text-white`}>
                                Quick{' '}
                                <span className={`text-customOrange`}>
                                    Links
                                </span>
                            </h1>
                            <ul className={`list-disc text-white ml-5`}>
                                <li className={`text-customOrange`}>
                                    {' '}
                                    <span className={`text-white`}>
                                        About
                                    </span>{' '}
                                </li>
                                <li className={`text-customOrange`}>
                                    {' '}
                                    <span className="text-white">
                                        Vehicle Type
                                    </span>{' '}
                                </li>
                                <li className={`text-customOrange`}>
                                    {' '}
                                    <span className="text-white">
                                        Our Services
                                    </span>{' '}
                                </li>
                                <li className={`text-customOrange`}>
                                    {' '}
                                    <span className="text-white">
                                        Team
                                    </span>{' '}
                                </li>
                                <li className={`text-customOrange`}>
                                    {' '}
                                    <span className="text-white">
                                        Contact Us
                                    </span>{' '}
                                </li>
                            </ul>
                        </div>
                        <div className={`flex flex-col space-y-3`}>
                            <h1 className={`text-2xl text-white`}>Subscribe</h1>
                            <p className={`text-justify text-sm text-white`}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sit, cumque. Maiores assumenda
                            </p>
                            <div
                                className={`flex items-center border-b border-teal-500 py-2`}
                            >
                                <input
                                    className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-white focus:outline-none"
                                    type="text"
                                    placeholder="Jane Doe"
                                    aria-label="Full name"
                                />
                                <div
                                    className={`rounded-full bg-customOrange p-2 hover:bg-white`}
                                >
                                    <NavLink to={'#'}>
                                        <GoArrowRight
                                            className={`-rotate-45 text-xl hover:-rotate-180`}
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default Footer
